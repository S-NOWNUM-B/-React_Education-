# Redux и Redux Toolkit: Управление глобальным состоянием

`Redux` - библиотека для централизованного хранения состояния приложения. В современных проектах с React обычно используют `Redux Toolkit` (RTK), потому что он сокращает шаблонный код и дает удобные инструменты из коробки.

## Зачем нужен Redux Toolkit

Когда состояние нужно в разных частях приложения, локального `useState` уже недостаточно. RTK помогает:

- хранить общее состояние в одном месте;
- предсказуемо изменять его через actions и reducers;
- удобно работать с асинхронными запросами.

## Базовые понятия

- **Store**: единое хранилище состояния приложения.
- **Action**: объект, который описывает событие в системе.
- **Reducer**: функция, изменяющая состояние на основе action.
- **Slice**: часть store со своим состоянием и набором reducers.

## Пример slice и store

```tsx
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  itemsCount: number;
}

const initialState: CartState = {
  itemsCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state) {
      state.itemsCount += 1;
    },
    removeItem(state) {
      state.itemsCount -= 1;
    },
    setItemsCount(state, action: PayloadAction<number>) {
      state.itemsCount = action.payload;
    },
  },
});

export const { addItem, removeItem, setItemsCount } = cartSlice.actions;

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
```

## Асинхронные запросы через createAsyncThunk

В RTK для асинхронной логики используется `createAsyncThunk`. Он автоматически создает стадии запроса:

- `pending` - загрузка;
- `fulfilled` - успех;
- `rejected` - ошибка.

```tsx
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProfile = createAsyncThunk("user/fetchProfile", async () => {
  const response = await fetch("/api/profile");
  if (!response.ok) {
    throw new Error("Не удалось загрузить профиль");
  }
  return response.json();
});

const userSlice = createSlice({
  name: "user",
  initialState: { data: null, loading: false, error: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка";
      });
  },
});
```

## Почему это важно для Middle-уровня

- Проекты с авторизацией, корзиной, профилями и фильтрами почти всегда требуют глобального состояния.
- RTK позволяет поддерживать сложные потоки данных в предсказуемом и масштабируемом виде.
- Понимание архитектуры store и async-логики напрямую влияет на качество продакшн-кода.

## Заключение

Redux Toolkit - современный стандарт работы с глобальным состоянием в React. Он упрощает архитектуру приложения, делает код чище и помогает безопасно масштабировать бизнес-логику.

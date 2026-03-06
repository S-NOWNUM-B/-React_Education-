# useReducer в React: Управление сложной логикой состояния

useReducer — это встроенный React-хук, который позволяет управлять состоянием компонента с помощью функции-редьюсера. Он является альтернативой useState и особенно полезен, когда логика обновления состояния становится сложной или включает несколько связанных подзначений

### Что такое useReducer и как он работает

В отличие от прямого обновления данных, useReducer предлагает декларативный подход к изменениям. Процесс работы с ним можно разделить на три ключевых шага:

- **Отправка действий (dispatching actions)**: Вместо того чтобы указывать React, «что делать», обработчики событий сообщают, «что только что сделал пользователь», отправляя специальный объект — action
- **Написание функции-редьюсера**: Это чистая функция, которая принимает текущее состояние и объект действия, а затем возвращает следующее состояние
- **Использование в компоненте**: Вы вызываете хук, передавая ему редьюсер и начальное значение, и получаете текущее состояние вместе с функцией dispatch

### Основные принципы и особенности

- **Чистота функций**: Редьюсеры должны быть чистыми. Они не должны отправлять сетевые запросы, устанавливать таймеры или изменять объекты вне своей области видимости
- **Иммутабельность**: Редьюсер должен возвращать новый объект или массив, не мутируя (не изменяя напрямую) существующее состояние. Для упрощения этого процесса можно использовать библиотеку Immer
- **Структура действия**: По соглашению объект действия имеет поле type (строка, описывающая событие) и может содержать дополнительные данные в других полях
- **Консолидация логики**: Весь код, отвечающий за «как обновлять данные», выносится в одну функцию, которую можно даже объявить в отдельном файле для лучшей читаемости

### Когда выбирать useReducer вместо useState

Хотя оба хука технически эквивалентны, существует несколько критериев выбора:

- **Размер кода**: useState требует меньше кода для простых обновлений, но useReducer сокращает объем логики в обработчиках при большом количестве вариантов изменения данных
- **Читаемость и отладка**: Если обновления состояния распределены по многим функциям и становится трудно отследить, «почему» изменилось значение, редьюсер помогает структурировать этот процесс. В нем удобно логировать каждое действие пользователя
- **Тестирование**: Редьюсер — это чистая функция, не зависящая от компонента, что позволяет легко тестировать логику обновлений в изоляции

### Масштабирование: Reducer + Context

Для крупных приложений часто применяется паттерн объединения useReducer и Context API. Это позволяет:

- Хранить логику в редьюсере
- Передавать текущее состояние через один контекст
- Передавать функцию dispatch через второй контекст

Такой подход избавляет от проблемы «прокидывания пропсов» (prop drilling) и позволяет любому глубоко вложенному компоненту обновлять глобальное состояние, просто вызывая dispatch

### Примеры использования useReducer

#### 1. Простой счётчик с несколькими действиями

Базовый пример, демонстрирующий работу редьюсера с разными типами действий

```tsx
import { useReducer } from "react";

// Функция-редьюсер принимает текущее состояние и действие
function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error(`Неизвестное действие: ${action.type}`);
  }
}

function Counter() {
  // useReducer возвращает текущее состояние и функцию dispatch
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Счётчик: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "reset" })}>Сбросить</button>
    </div>
  );
}
```

#### 2. Форма с множеством полей

Пример управления сложным состоянием формы, где useReducer помогает избежать множества вызовов useState

```tsx
import { useReducer } from "react";

function formReducer(state, action) {
  switch (action.type) {
    case "setField":
      return { ...state, [action.field]: action.value };
    case "reset":
      return { name: "", email: "", password: "" };
    default:
      return state;
  }
}

function RegistrationForm() {
  const [formState, dispatch] = useReducer(formReducer, {
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Отправка данных:", formState);
    dispatch({ type: "reset" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formState.name}
        onChange={(e) =>
          dispatch({ type: "setField", field: "name", value: e.target.value })
        }
        placeholder="Имя"
      />
      <input
        value={formState.email}
        onChange={(e) =>
          dispatch({ type: "setField", field: "email", value: e.target.value })
        }
        placeholder="Email"
      />
      <input
        type="password"
        value={formState.password}
        onChange={(e) =>
          dispatch({
            type: "setField",
            field: "password",
            value: e.target.value,
          })
        }
        placeholder="Пароль"
      />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
```

#### 3. Список задач с различными операциями

Демонстрация работы с массивами в состоянии через редьюсер

```tsx
import { useReducer } from "react";

function todosReducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), text: action.text, completed: false },
      ];
    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      );
    case "delete":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todosReducer, []);

  const handleAdd = (text) => {
    dispatch({ type: "add", text });
  };

  return (
    <div>
      <button onClick={() => handleAdd("Новая задача")}>Добавить задачу</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: "toggle", id: todo.id })}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: "delete", id: todo.id })}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### Заключение

Знакомство с useReducer является важной частью продвинутых курсов по React, так как он готовит разработчика к использованию более мощных инструментов управления состоянием, таких как Redux Toolkit. Понимание принципов работы редьюсеров помогает писать более предсказуемый и тестируемый код в крупных приложениях

# Хук useLocation в React Router

`useLocation` - это встроенный хук из `react-router-dom`, который возвращает объект текущего местоположения (`location`). Объект обновляется каждый раз при изменении URL, поэтому компонент получает актуальную информацию о навигации.

## Для чего нужен useLocation

Хук помогает синхронизировать интерфейс с адресной строкой браузера.

- **Условный рендеринг**: показывать или скрывать элементы в зависимости от текущей страницы.
- **Аналитика**: отслеживать переходы пользователя по `pathname`.
- **Работа с query-параметрами**: читать фильтры и параметры поиска из URL.
- **Чтение переданного state**: получать данные, отправленные при переходе через `navigate` или `Link`.

## Что содержит объект location

- **pathname**: путь URL, например `/shop/cart`.
- **search**: строка query-параметров, например `?category=pizza&sort=price`.
- **hash**: якорь страницы, например `#reviews`.
- **state**: произвольные данные, переданные при навигации.

## Базовый пример использования

Компонент с `useLocation` должен находиться внутри роутера (`RouterProvider` или `BrowserRouter`).

```tsx
import { useLocation } from "react-router-dom";

export function Breadcrumbs() {
  const location = useLocation();

  return (
    <nav>
      <p>Вы находитесь здесь: {location.pathname}</p>
      {location.search && <span>Параметры: {location.search}</span>}
    </nav>
  );
}
```

## Пример с аналитикой через useEffect

```tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // Здесь обычно отправляют событие в систему аналитики
    console.log("Page view:", location.pathname);
  }, [location.pathname]);

  return null;
}
```

## Важная особенность

`useLocation` - реактивный источник данных. При любом переходе компонент, который использует этот хук, будет перерисован. Это удобно для динамических заголовков, хлебных крошек и активных пунктов меню.

## Заключение

`useLocation` дает доступ к текущему URL и связанному состоянию навигации. Это один из ключевых хуков React Router для построения интерфейса, который корректно реагирует на смену маршрута.

# errorElement в React Router

`errorElement` - это свойство маршрута в `react-router-dom` (версия 6.4+), которое задает компонент для отображения ошибок. Оно помогает изолировать сбой на конкретном маршруте и не ломать все приложение целиком.

## Для чего нужен errorElement

- **Ошибки в loader**: если загрузка данных завершилась ошибкой (`404`, `500` и другие), показывается запасной UI.
- **Ошибки во время рендера**: если компонент маршрута выбрасывает исключение, пользователь видит страницу ошибки.
- **Обработка 404**: часто используется как единая страница для несуществующих путей.

## Как работает всплытие ошибок

Ошибки в дереве маршрутов поднимаются вверх.

- Если у дочернего маршрута есть свой `errorElement`, будет показан он.
- Если нет, ошибка всплывет к ближайшему родителю с `errorElement`.

Это позволяет либо задавать индивидуальные ошибки для конкретных страниц, либо использовать общий fallback на уровне корневого маршрута.

## Пример конфигурации роутера

```tsx
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import { Dashboard } from "./pages/Dashboard";
import { ErrorPage } from "./pages/ErrorPage";
import { dashboardLoader } from "./loaders/dashboardLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: dashboardLoader,
      },
    ],
  },
]);
```

Если `dashboardLoader` вернет ошибку, React Router отрисует `ErrorPage`.

## useRouteError в компоненте ошибки

Внутри компонента, заданного как `errorElement`, обычно используют `useRouteError`, чтобы показать детали ошибки.

```tsx
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Ошибка {error.status}</h1>
        <p>{error.statusText}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Что-то пошло не так</h1>
      <p>Попробуйте обновить страницу позже.</p>
    </div>
  );
}
```

## Заключение

`errorElement` - базовый механизм отказоустойчивости в React Router. Он особенно важен при работе с `loader`, где часто возникают сетевые и серверные ошибки.

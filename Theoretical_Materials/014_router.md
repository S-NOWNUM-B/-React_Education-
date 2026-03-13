# React Router: Основные концепции и создание навигации

React Router - стандартная библиотека маршрутизации в React-приложениях. Она позволяет строить Single Page Application (SPA), где переходы между страницами происходят без полной перезагрузки браузера.

## Основные инструменты

- **createBrowserRouter**: создает конфигурацию маршрутов приложения.
- **Link**: переход между страницами без перезагрузки.
- **NavLink**: ссылка с поддержкой активного состояния.
- **Outlet**: место в родительском макете, где рендерятся дочерние маршруты.

## Базовая настройка маршрутов

Сначала описывается структура маршрутов, затем она подключается через `RouterProvider`.

```tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { ErrorPage } from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "menu", element: <MenuPage /> },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
```

## Вложенные маршруты

Вложенность нужна, когда у нескольких страниц общий макет: например, шапка, сайдбар или футер.

```tsx
import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/menu">Меню</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
```

## Маршруты с параметрами

Динамические маршруты позволяют использовать один шаблон страницы для разных данных.

```tsx
{ path: "product/:id", element: <ProductPage /> }
```

Внутри страницы параметр читается через `useParams`.

```tsx
import { useParams } from "react-router-dom";

export function ProductPage() {
  const { id } = useParams();
  return <h1>Товар #{id}</h1>;
}
```

## Навигация: Link и NavLink

- **Link** подходит для обычных переходов.
- **NavLink** удобно использовать в меню, где нужно подсвечивать активный пункт.

```tsx
import { NavLink } from "react-router-dom";

<NavLink
  to="/menu"
  className={({ isActive }) => (isActive ? "active-link" : "")}
>
  Меню
</NavLink>;
```

## Обработка ошибок маршрутов

Свойство `errorElement` показывает fallback-компонент при ошибке загрузки или переходе на несуществующий путь в рамках роутера.

```tsx
{
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
}
```

## Продвинутые возможности

- **Private Routes**: ограничение доступа к страницам для неавторизованных пользователей.
- **useLocation**: получение текущего пути и состояния навигации.
- **Lazy Loading**: загрузка страниц по требованию через `lazy` и `Suspense`.

## Заключение

Понимание маршрутизации в React - базовый навык для создания полноценных приложений. Через маршруты связываются страницы, макеты, защита доступа и логика навигации по всему проекту.

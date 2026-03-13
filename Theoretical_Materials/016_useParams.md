# Хук useParams в React Router

`useParams` - это встроенный хук из `react-router-dom`, который читает динамические параметры из URL. Он нужен для страниц, где контент зависит от адреса: карточка товара, профиль пользователя, статья блога и другие подобные сценарии.

## Как работает useParams

В маршруте задается динамический сегмент через двоеточие, например `:id` или `:slug`.

```tsx
{ path: "product/:productId", element: <ProductPage /> }
```

После этого `useParams` возвращает объект, где:

- ключ - имя параметра из пути;
- значение - фактическое значение из URL.

Если пользователь открыл путь `/product/42`, то `productId` будет равно строке `"42"`.

## Базовый пример

```tsx
import { useParams } from "react-router-dom";

export function ProductPage() {
  const { productId } = useParams();

  return (
    <div>
      <h1>Просмотр товара</h1>
      <p>ID выбранного товара: {productId}</p>
    </div>
  );
}
```

## Основные сценарии использования

- **Загрузка данных**: взять `id` из URL и запросить объект в API.
- **Навигация по шаблону**: один компонент показывает разный контент для разных параметров.
- **Фильтрация по категории**: параметры маршрута определяют тип отображаемых данных.

## Пример загрузки данных по параметру

```tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Product {
  id: number;
  title: string;
}

export function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!productId) {
      return;
    }

    fetch(`/api/products/${productId}`)
      .then((res) => res.json())
      .then((data: Product) => setProduct(data));
  }, [productId]);

  if (!product) {
    return <p>Загрузка...</p>;
  }

  return <h1>{product.title}</h1>;
}
```

## Важные особенности

- **Реактивность**: при смене URL параметры обновляются, а компонент перерисовывается.
- **Типизация в TypeScript**: параметры можно типизировать для более безопасного кода.
- **Место вызова**: хук вызывается только на верхнем уровне функционального компонента внутри роутера.

## Заключение

`useParams` связывает адресную строку и данные страницы. Это один из базовых инструментов для создания динамических маршрутов в React Router.

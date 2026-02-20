# Компоненты React

## Что такое компоненты

Компоненты — это независимые, переиспользуемые части UI, которые работают как JavaScript функции. Они принимают входные данные (props) и возвращают React-элементы, описывающие, что должно отображаться на экране.

Компоненты позволяют разбить интерфейс на независимые части, каждая из которых отвечает за свою логику и отображение.

## Типы компонентов

### 1. Функциональные компоненты

Обычные JavaScript функции, которые возвращают JSX.

```tsx
function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}
```

С использованием стрелочной функции:

```tsx
const Welcome = (props) => {
  return <h1>Привет, {props.name}</h1>;
};
```

### 2. Классовые компоненты (устаревший подход)

```tsx
class Welcome extends React.Component {
  render() {
    return <h1>Привет, {this.props.name}</h1>;
  }
}
```

**Примечание**: Функциональные компоненты с хуками — современный стандарт.

## Как применяется

### Базовое использование

```tsx
// Определение компонента
function Button() {
  return <button>Нажми меня</button>;
}

// Использование компонента
function App() {
  return (
    <div>
      <Button />
      <Button />
    </div>
  );
}
```

### Компоненты с пропсами

```tsx
interface UserProps {
  name: string;
  age: number;
}

function UserCard({ name, age }: UserProps) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Возраст: {age}</p>
    </div>
  );
}

// Использование
<UserCard name="Иван" age={25} />
```

### Композиция компонентов

```tsx
function Avatar({ src, alt }) {
  return <img src={src} alt={alt} className="avatar" />;
}

function UserInfo({ user }) {
  return (
    <div className="user-info">
      <Avatar src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
    </div>
  );
}

function Profile({ user }) {
  return (
    <section>
      <UserInfo user={user} />
      <p>{user.bio}</p>
    </section>
  );
}
```

### Условный рендеринг

```tsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>С возвращением!</h1>;
  }
  return <h1>Войдите в систему</h1>;
}

// Или с тернарным оператором
function Status({ isOnline }) {
  return (
    <span>
      {isOnline ? 'В сети' : 'Не в сети'}
    </span>
  );
}
```

### Рендеринг списков

```tsx
interface Item {
  id: number;
  title: string;
}

function TodoList({ items }: { items: Item[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```

## Лучшие практики

### 1. Используйте функциональные компоненты

```tsx
// Хорошо
const MyComponent = () => {
  return <div>Компонент</div>;
};

// Избегайте (устаревший подход)
class MyComponent extends React.Component {
  render() {
    return <div>Компонент</div>;
  }
}
```

### 2. Один компонент — одна ответственность

```tsx
// Плохо - слишком много логики
function UserDashboard() {
  return (
    <div>
      <header>...</header>
      <nav>...</nav>
      <main>
        <div>...</div>
        <table>...</table>
      </main>
    </div>
  );
}

// Хорошо - разделение на компоненты
function UserDashboard() {
  return (
    <div>
      <Header />
      <Navigation />
      <MainContent />
    </div>
  );
}
```

### 3. Используйте TypeScript для типизации props

```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

function Button({ label, onClick, disabled = false, variant = 'primary' }: ButtonProps) {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {label}
    </button>
  );
}
```

### 4. Деструктуризация props

```tsx
// Хорошо
function User({ name, email, avatar }) {
  return <div>{name}</div>;
}

// Менее читаемо
function User(props) {
  return <div>{props.name}</div>;
}
```

### 5. Правильное именование

```tsx
// Компоненты с заглавной буквы
function UserProfile() { }

// Обработчики событий с префиксом handle
function handleClick() { }
function handleSubmit() { }

// Props для обработчиков с префиксом on
<Button onClick={handleClick} onHover={handleHover} />
```

### 6. Используйте children для композиции

```tsx
interface CardProps {
  children: React.ReactNode;
  title?: string;
}

function Card({ children, title }: CardProps) {
  return (
    <div className="card">
      {title && <h2>{title}</h2>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

// Использование
<Card title="Заголовок">
  <p>Содержимое карточки</p>
  <Button label="Действие" />
</Card>
```

### 7. Избегайте слишком глубокой вложенности props

```tsx
// Плохо
<Component user={user} settings={settings} theme={theme} config={config} />

// Лучше - используйте контекст для глобальных данных
<ThemeProvider>
  <Component user={user} />
</ThemeProvider>
```

### 8. Мемоизация для оптимизации

```tsx
import { memo } from 'react';

// Компонент не будет перерендериваться, если props не изменились
const ExpensiveComponent = memo(({ data }) => {
  return <div>{/* сложная логика */}</div>;
});
```

### 9. Используйте фрагменты

```tsx
// Хорошо - без лишних DOM-элементов
function List() {
  return (
    <>
      <li>Элемент 1</li>
      <li>Элемент 2</li>
    </>
  );
}

// Плохо - лишний div
function List() {
  return (
    <div>
      <li>Элемент 1</li>
      <li>Элемент 2</li>
    </div>
  );
}
```

### 10. Выносите константы и вспомогательные функции наружу

```tsx
// Плохо - создается на каждый рендер
function Component() {
  const defaultOptions = { /* ... */ };
  const formatData = (data) => { /* ... */ };
  return <div>...</div>;
}

// Хорошо
const DEFAULT_OPTIONS = { /* ... */ };
const formatData = (data) => { /* ... */ };

function Component() {
  return <div>...</div>;
}
```

## Структура файлов компонентов

```
components/
  Button/
    Button.tsx          # Основной файл компонента
    Button.module.css   # Стили
    Button.test.tsx     # Тесты
    index.ts            # Экспорт
```

## Ключевые моменты

- Компоненты должны быть небольшими и фокусироваться на одной задаче
- Используйте props для передачи данных от родителя к потомку
- Props доступны только для чтения (immutable)
- Всегда используйте `key` при рендеринге списков
- Называйте компоненты понятно и последовательно
- Предпочитайте композицию наследованию

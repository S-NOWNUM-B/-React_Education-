interface ButtonProps {
  text?: string;
  onClick?: () => void;
}

function Button({ text = "Нажми меня", onClick }: ButtonProps) {
  return (
    <button
      className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 w-40 h-10"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;

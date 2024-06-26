import { useFake } from "./FakeDarkContext";

function Button() {
  const { setIsFakeDark, isFakeDark } = useFake();

  return (
    <div>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>
    </div>
  );
}

export default Button;

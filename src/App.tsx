import { useRef } from "react";
import Input from "./Input";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef?.current?.focus();
  }

  return (
    <>
      <h1>React Typescript</h1>
      <Input ref={inputRef} />
      <button onClick={handleClick}>Klick me</button>
    </>
  );
}

export default App;

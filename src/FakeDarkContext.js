import { createContext, useContext, useEffect, useState } from "react";

const FakeCotext = createContext();

function FakeDarkContext({ children }) {
  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <FakeCotext.Provider value={{ isFakeDark, setIsFakeDark }}>
      {children}
    </FakeCotext.Provider>
  );
}

function useFake() {
  const context = useContext(FakeCotext);
  if (context === undefined) throw new Error("out");
  return context;
}

export { FakeDarkContext, useFake };

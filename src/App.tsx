import React, { useState } from "react";
import { LANG_ES } from "./lang/es";
import Home from "./routes/Home";

function App() {
  const [lang, setLang] = useState(LANG_ES);
  return (
    <div className="App">
      <Home lang={lang} />
    </div>
  );
}

export default App;

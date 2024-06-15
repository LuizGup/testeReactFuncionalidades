import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  return (
    <div>
      <input
        onChange={(event) => {
          setNome(event.target.value);
        }}
        type="text"
        placeholder="Digite o Nome"
      />
      <p>{nome}</p>
    </div>
  );
}

export default App;

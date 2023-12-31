import React from "react";
import "./style.css";
import Items from "./Items";

const Data = () => {
  const [item, setItem] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [qntd, setQntd] = React.useState(1);
  const [valuesfinal, setValuesfinal] = React.useState(() => {
    const storedValues = JSON.parse(localStorage.getItem("valorFinais")) || [];
    return storedValues;
  });

  React.useEffect(() => {
    localStorage.setItem("valorFinais", JSON.stringify(valuesfinal));
  }, [valuesfinal]);

  const limparLocalStorage = () => {
    localStorage.removeItem("valorFinais");
    setValuesfinal([]);
  };

  function somar() {
    if (item.length !== 0 && price !== 0) {
      const soma = price * qntd;
      setItem("");
      setPrice(0);
      setQntd(1);
      setTimeout(() => {
        setValuesfinal([...valuesfinal, [item, soma]]);
      }, 300);
    }
  }

  React.useEffect(() => {
    console.log(valuesfinal);
  }, [valuesfinal]);

  return (
    <section>
      <div className="containerMain">
        <div className="items">
          <label htmlFor="valor1">Item:</label>
          <input onChange={(ev) => setItem(ev.target.value)} value={item} />
        </div>
        <div className="items">
          <label htmlFor="valor2">Valor:</label>
          <input
            value={price}
            type="number"
            onChange={(ev) => setPrice(ev.target.value)}
          />
        </div>
        <div className="items">
          <label htmlFor="valor3">Quantidade:</label>
          <input
            value={qntd}
            type="number"
            onChange={(ev) => setQntd(ev.target.value)}
          />
        </div>
        <button onClick={somar} className="btn-send">
          <span>Adicionar</span>
        </button>
      </div>
      <Items
        valuesfinal={valuesfinal}
        setValuesfinal={setValuesfinal}
        deleteLocal={limparLocalStorage}
      />
    </section>
  );
};

export default Data;

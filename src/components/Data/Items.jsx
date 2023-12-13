import React from "react";
import "./items.css";
import Footer from "./Footer";

const Items = ({ valuesfinal, setValuesfinal, deleteLocal }) => {
  const somaTotal = valuesfinal.reduce((total, item) => total + item[1], 0);

  function toggle(index) {
    const array = [...valuesfinal];
    array.splice(index, 1);
    setValuesfinal(array);
  }

  return (
    <>
      <section className="section">
        {valuesfinal.map((i) => (
          <div key={i[1]} className="compras">
            <p className="item1"> {i[0]}</p>
            <div>
              <p className="item2"> R$ {i[1]}</p>
              <button onClick={() => toggle(valuesfinal.indexOf(i))}>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 85 77"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.5 30.9167V57.4583M27.3333 30.9167V57.4583M69.0417 27.125H80.4167M69.0417 46.0833H80.4167M69.0417 65.0417H76.625M57.6667 15.75V54.425C57.6667 60.7958 57.6667 63.9808 56.4268 66.4142C55.3363 68.5546 53.5963 70.2946 51.4559 71.3851C49.0224 72.625 45.8374 72.625 39.4667 72.625H30.3667C23.9961 72.625 20.8108 72.625 18.3775 71.3851C16.2372 70.2946 14.497 68.5546 13.4065 66.4142C12.1667 63.9808 12.1667 60.7958 12.1667 54.425V15.75M4.58333 15.75H65.25M50.0833 15.75L49.0573 12.6714C48.0628 9.68807 47.5653 8.19639 46.6432 7.09355C45.8287 6.11966 44.783 5.36584 43.6015 4.90121C42.2634 4.375 40.6914 4.375 37.5466 4.375H32.2869C29.1421 4.375 27.5698 4.375 26.2319 4.90121C25.0504 5.36584 24.0046 6.11966 23.1901 7.09355C22.2679 8.19639 21.7707 9.68807 20.7762 12.6714L19.75 15.75"
                    stroke="white"
                    strokeWidth="7.58333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
        {somaTotal > 0 && (
          <button className="clean" onClick={deleteLocal}>
            Limpar Tudo
          </button>
        )}
      </section>
      <Footer soma={somaTotal} />
    </>
  );
};

export default Items;

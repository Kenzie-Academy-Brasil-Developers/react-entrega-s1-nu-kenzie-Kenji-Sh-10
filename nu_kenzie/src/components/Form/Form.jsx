import { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("entrada");

  const handleSubmit = (event) => {
    event.preventDefault();
    setListTransactions([
      ...listTransactions,
      {
        description: description,
        type: type,
        value: type === "saída" ? -Math.abs(value) : Number(value),
      },
    ]);

    setDescription("");
    setValue("");
  };

  return (
    <div>
      <form className={styles["form"]} onSubmit={handleSubmit}>
        <label htmlFor="descricao">Descrição</label>
        <input
          name="descricao"
          type="text"
          value={description}
          placeholder="Digite sua descrição"
          onChange={(e) => setDescription(e.target.value)}
        />
        <div>
          <div>
            <label htmlFor="valor">Valor</label>
            <input
              name="valor"
              type="number"
              value={value}
              placeholder="R$ 1"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="tipo">Tipo de valor</label>
            <select
              name="tipo"
              onChange={(e) => setType(e.target.value)}
              defaultValue={"entrada"}
            >
              <option value="entrada">Entrada</option>
              <option value="saída">Saída</option>
            </select>
          </div>
        </div>
        <button>Inserir valor</button>
      </form>
    </div>
  );
};

export default Form;

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Form.module.css";

const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("entrada");
  const [uuid, setUuid] = useState(uuidv4);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUuid(uuidv4);
    setListTransactions([
      ...listTransactions,
      {
        id: uuid,
        description: description,
        type: type,
        value: type === "saída" ? -Math.abs(value) : value,
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
          required
        />
        <div>
          <div>
            <label htmlFor="valor">Valor</label>
            <input
              name="valor"
              type="number"
              value={value}
              placeholder="R$ 1"
              onChange={(e) => setValue(e.target.valueAsNumber)}
              required
            />
          </div>
          <div>
            <label htmlFor="tipo">Tipo de valor</label>
            <select
              name="tipo"
              defaultValue={"entrada"}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="entrada">Entrada</option>
              <option value="saída">Saída</option>
            </select>
          </div>
        </div>
        <button type="submit">Inserir valor</button>
      </form>
    </div>
  );
};

export default Form;

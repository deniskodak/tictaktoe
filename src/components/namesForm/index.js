import React, { useContext, useState } from "react";
import style from "./index.module.scss";
import PlayersInfoContext from "../../context";

const initialNames = {
  x: "",
  o: "",
};

export default function NamesForm({ onClose }) {
  const { setPlayersInfo } = useContext(PlayersInfoContext);

  const [playersName, setPlayersName] = useState(initialNames);

  const handleChange = ({ target }) => {
    const key = target.name;
    const value = target.value;

    setPlayersName((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleSave = () => {
    const { x, o } = playersName;

    setPlayersInfo((prevState) => ({
      ...prevState,
      x: { ...prevState.x, name: x.trim() === "" ? prevState.x.name : x },
      o: { ...prevState.o, name: o.trim() === "" ? prevState.o.name : o },
    }));

    onClose();
  };

  return (
    <form className={style.form}>
      <label className={style.label}>
        {" "}
        First Player name
        <input
          className={style.input}
          name="x"
          minLength="2"
          value={playersName.x}
          onChange={handleChange}
          autoComplete="off"
        />
      </label>
      <label className={style.label}>
        {" "}
        Second Player name
        <input
          className={style.input}
          minLength="2"
          name="o"
          value={playersName.o}
          onChange={handleChange}
          autoComplete="off"
        />
      </label>
      <button className={style.button} type="button" onClick={handleSave}>
        Start Game
      </button>
    </form>
  );
}

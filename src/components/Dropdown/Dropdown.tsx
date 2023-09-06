import { useState } from "react";
import classes from "./style.module.css";
import { ReactComponent as ArroDownIcon } from "../../assets/images/ArrowDown.svg";

function Dropdown({ text }: any) {
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.dropdown}>
      <div className={classes.title}>
        <p>Коментарии</p>
        <ArroDownIcon onClick={() => setOpen(!open)} />
      </div>
      {open ? (
        <div>
          <p>{text}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Dropdown;

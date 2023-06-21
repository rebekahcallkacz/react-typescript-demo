import React from "react";
import { createButtonLabel } from "./utils";
import "./Button.css";
import { IPerson } from "./types";

type ButtonProps = {
  person: IPerson;
  value: string;
  onClick: (value: string) => void;
};

function Button({ person, value, onClick }: ButtonProps) {
  return (
    <button
      className="Button"
      onClick={(event: any) => onClick(event.target.value)}
      value={value}
    >
      {createButtonLabel(person)}
    </button>
  );
}

export default Button;

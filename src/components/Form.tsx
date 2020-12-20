import * as React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  text: string;
};

const label = {
  fontFamily: "Quicksand",
};

const form = {
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
};

export default function Form() {
  const { register, setValue, handleSubmit, errors } = useForm<FormData>();
  const onSubmit = handleSubmit(({ name, email, text }) => {
    console.log(name, email, text);
  });

  return (
    <form style={form} onSubmit={onSubmit}>
      <div>
        <label style={label}>Nimesi:</label>
        <input name="name" ref={register} />
        <label style={label}>Sähköpostiosoitteesi:</label>
        <input name="email" ref={register} />
      </div>
      <label style={label}>Kerro kuinka voin auttaa?</label>
      <textarea id="text" name="text" rows={12} cols={50} ref={register} />
      <button type="button" onClick={onSubmit}>
        Lähetä
      </button>
    </form>
  );
}

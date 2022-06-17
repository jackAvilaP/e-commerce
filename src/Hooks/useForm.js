import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formstate, setFormstate] = useState(initialForm);

  //captura los valores del input por medio del evento
  const onInputChage = ({ target }) => {
    const { name, value } = target;
    setFormstate({
      ...formstate,
      [name]: value
    });
  };

  const onResetForm = () => {
    setFormstate(initialForm);
  };

  return {
    ...formstate, //para poder destructurar el obj
    formstate,
    onResetForm,
    onInputChage
  };
};

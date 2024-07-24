import { ChangeEventHandler, FormEventHandler, useState } from "react";

import { marineMammals as marineMammalsMock, marineInvertebrates } from "../../mocks";
import { Option } from "../Select/types";
import { Select } from "../Select";
import { FormContainer, FormInput, SubmitButton } from "./style";

export const Form = () => {
  const [marineInvertebrate, setMarineInvertebrate] = useState<Option["value"] | null>(null);
  const [marineMammals, setMarineMammals] = useState<Option["value"][]>([]);

  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | null>();

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setAge(Number(e.target.value));
  };

  const handleSingleSelect = (value: Option["value"] | null) => {
    setMarineInvertebrate(value);
  };

  const handleMultiSelect = (value: Option["value"][]) => {
    const selectedOptions = marineMammals.includes(value.toString())
      ? marineMammals.filter((selected) => selected !== value[0])
      : [...marineMammals, value[0]];

    setMarineMammals(selectedOptions);
  };

  const handleToggleSelectAll = () => {
    setMarineMammals(marineMammals.length ? [] : marineMammalsMock.map(({ value }) => value));
  }; // move to Select component

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log({ name, age, marineInvertebrate, marineMammals });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormInput placeholder="Name" onChange={handleNameChange} />
      <FormInput placeholder="Age" onChange={handleAgeChange} />
      <Select
        title="Marine Invertebrate"
        options={marineInvertebrates}
        onSingleSelect={handleSingleSelect}
        selected={marineInvertebrate}
      />

      <Select
        title="Marine Mammals"
        options={marineMammalsMock}
        onMultiSelect={handleMultiSelect}
        selected={marineMammals}
        onToggleSelectAll={handleToggleSelectAll}
      />
      <SubmitButton type="submit" value="Send" />
    </FormContainer>
  );
};

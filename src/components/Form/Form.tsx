import { ChangeEventHandler, useState } from "react";

import { marineMammals, marineInvertebrates } from "../../mocks";

import { Option } from "../Select/types";
import { Select } from "../Select";

export const Form = () => {
  const [singleSelected, setSingleSelected] = useState<Option["value"] | null>(null);
  const [multiSelected, setMultiSelected] = useState<Option["value"][]>([]);

  const handleSingleSelect: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSingleSelected(e.target?.value);
  };

  const handleMultiSelect: ChangeEventHandler<HTMLInputElement> = (e) => {
    const selectedOptions = multiSelected.includes(e.target.value)
      ? multiSelected.filter((value) => value !== e.target.value)
      : [...multiSelected, e.target.value];

    setMultiSelected(selectedOptions);
  };

  return (
    <>
      <Select
        title="Choose a Marine Invertebrate"
        options={marineInvertebrates}
        onSelect={handleSingleSelect}
        selected={singleSelected}
      />

      <Select
        title="Choose some Marine Mammals"
        options={marineMammals}
        onSelect={handleMultiSelect}
        selected={multiSelected}
      />
    </>
  );
};

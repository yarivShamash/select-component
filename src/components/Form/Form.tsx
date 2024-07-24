import { useState } from "react";

import { marineMammals, marineInvertebrates } from "../../mocks";
import { Option } from "../Select/types";
import { Select } from "../Select";

export const Form = () => {
  const [singleSelected, setSingleSelected] = useState<Option["value"] | null>(null);
  const [multiSelected, setMultiSelected] = useState<Option["value"][]>([]);

  const handleSingleSelect = (value: Option["value"] | null) => {
    setSingleSelected(value);
  };

  const handleMultiSelect = (value: Option["value"][]) => {
    const selectedOptions = multiSelected.includes(value.toString())
      ? multiSelected.filter((selected) => selected !== value[0])
      : [...multiSelected, value[0]];

    setMultiSelected(selectedOptions);
  };

  const handleToggleSelectAll = () => {
    setMultiSelected(multiSelected.length ? [] : marineMammals.map(({ value }) => value));
  };

  return (
    <>
      <Select
        title="Choose a Marine Invertebrate"
        options={marineInvertebrates}
        onSingleSelect={handleSingleSelect}
        selected={singleSelected}
      />

      <Select
        title="Choose some Marine Mammals"
        options={marineMammals}
        onMultiSelect={handleMultiSelect}
        selected={multiSelected}
        onToggleSelectAll={handleToggleSelectAll}
      />
    </>
  );
};

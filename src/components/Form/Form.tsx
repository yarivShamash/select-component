import { ChangeEventHandler, useState } from "react";

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
        title="Single Select"
        options={[
          { label: "Option 1", value: 1 },
          { label: "Option 2", value: 2 },
        ]}
        onSelect={handleSingleSelect}
        selected={singleSelected}
      />

      <Select
        title="Multi Select"
        options={[
          { label: "Option 1", value: 1 },
          { label: "Option 2", value: 2 },
        ]}
        onSelect={handleMultiSelect}
        selected={multiSelected}
      />
    </>
  );
};

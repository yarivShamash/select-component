import { ChangeEventHandler, useMemo, useState } from "react";

import { Option } from "./types";
import { SelectContainer, SelectTitle } from "./style";

import { Search, Options } from "./";

interface SelectProps {
  title: string;
  options: Option[];
  onSelect: ChangeEventHandler<HTMLInputElement>;
  selected: Option["value"] | Option["value"][] | null;
}

const Select = ({ title, options, onSelect, selected }: SelectProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const selectionTitle = useMemo(() => {
    if (Array.isArray(selected)) {
      const selectedOptions = options.filter(({ value }) => selected.includes(value.toString()));
      const selectedTitles = selectedOptions.map(({ label }) => label);
      return selectedTitles.join(", ");
    } else {
      const selectedOption = options.filter(({ value }) => selected === value.toString());
      return selectedOption[0]?.label;
    }
  }, [options, selected]);

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    const filteredOptions = options.filter(({ label }) => label.toLowerCase().includes(e.target.value.toLowerCase()));

    setFilteredOptions(filteredOptions);
  };

  return (
    <SelectContainer>
      <SelectTitle onClick={toggleExpand}>{selectionTitle || title}</SelectTitle>
      {isExpanded && (
        <>
          <Search onSearch={handleSearch} />
          <Options options={filteredOptions} onSelect={onSelect} selected={selected} />
        </>
      )}
    </SelectContainer>
  );
};

export default Select;

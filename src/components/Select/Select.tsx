import { ChangeEventHandler, useMemo, useState } from "react";

import { Option } from "./types";
import { OptionsContainer, SelectContainer, SelectTitle, ToggleSelectionButton } from "./style";

import { Search, OptionItem } from "./";

interface SelectProps {
  title: string;
  options: Option[];
  selected: Option["value"] | Option["value"][] | null;
  onSingleSelect?: (value: Option["value"]) => void;
  onMultiSelect?: (value: Option["value"][]) => void;
  onToggleSelectAll?: () => void;
}

const Select = ({ title, options, onSingleSelect, onMultiSelect, onToggleSelectAll, selected }: SelectProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);

  const toggleExpand = () => setIsExpanded(!isExpanded);
  const isMultiSelect = Array.isArray(selected) && onMultiSelect;

  const toggleSelectAllButtonTitle = isMultiSelect && selected.length ? "Clear All" : "Select All";

  const selectionTitle = useMemo(() => {
    if (isMultiSelect) {
      const selectedOptions = options.filter(({ value }) => selected.includes(value.toString()));
      const selectedTitles = selectedOptions.map(({ label }) => label);
      return selectedTitles.join(", ");
    } else {
      const selectedOption = options.filter(({ value }) => selected === value.toString());
      return selectedOption[0]?.label;
    }
  }, [isMultiSelect, options, selected]);

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
          <OptionsContainer>
            {filteredOptions.map((option) => {
              return (
                <OptionItem
                  option={option}
                  onSingleSelect={onSingleSelect}
                  onMultiSelect={onMultiSelect}
                  selected={selected}
                />
              );
            })}
          </OptionsContainer>
          {onToggleSelectAll && (
            <ToggleSelectionButton onClick={onToggleSelectAll}>{toggleSelectAllButtonTitle}</ToggleSelectionButton>
          )}
        </>
      )}
    </SelectContainer>
  );
};

export default Select;

import { ChangeEventHandler, useMemo, useState } from "react";

import { Option } from "./types";
import { OptionContainer, OptionsContainer, SelectContainer, SelectTitle } from "./style";

interface SelectProps {
  title: string;
  options: Option[];
  onSelect: ChangeEventHandler<HTMLInputElement>;
  selected: Option["value"] | Option["value"][] | null;
}

export const Select = ({ title, options, onSelect, selected }: SelectProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

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

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <SelectContainer>
      <SelectTitle onClick={toggleExpand}>{selectionTitle || title}</SelectTitle>

      {isExpanded && (
        <OptionsContainer>
          {options.map((option) => {
            const checkboxId = option.value.toString();
            const isSelected = Array.isArray(selected)
              ? selected.includes(option.value.toString())
              : selected === option.value.toString();

            return (
              <OptionContainer key={option.value}>
                <input type="checkbox" id={checkboxId} onChange={onSelect} value={option.value} checked={isSelected} />
                <label htmlFor={checkboxId}>{option.label}</label>
              </OptionContainer>
            );
          })}
        </OptionsContainer>
      )}
    </SelectContainer>
  );
};

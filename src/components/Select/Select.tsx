import { ChangeEventHandler, useState } from "react";

import { Option } from "./types";
import {
  OptionContainer,
  OptionsContainer,
  SelectContainer,
  SelectTitle,
} from "./style";

interface SelectProps {
  title: string;
  options: Option[];
  onSelect: ChangeEventHandler<HTMLInputElement>;
  selected: Option["value"] | Option["value"][] | null;
}

export const Select = ({ title, options, onSelect, selected }: SelectProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <SelectContainer>
      <SelectTitle onClick={toggleExpand}>{title}</SelectTitle>

      {isExpanded && (
        <OptionsContainer>
          {options.map((option) => {
            const checkboxId = option.value.toString();
            const isSelected = Array.isArray(selected)
              ? selected.includes(option.value.toString())
              : selected === option.value.toString();

            return (
              <OptionContainer key={option.value}>
                <input
                  type="checkbox"
                  id={checkboxId}
                  onChange={onSelect}
                  value={option.value}
                  checked={isSelected}
                />
                <label htmlFor={checkboxId}>{option.label}</label>
              </OptionContainer>
            );
          })}
        </OptionsContainer>
      )}
    </SelectContainer>
  );
};

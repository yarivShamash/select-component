import { ChangeEventHandler } from "react";

import { Option } from "./types";
import { OptionContainer, OptionsContainer } from "./style";

interface OptionsProps {
  options: Option[];
  onSelect: ChangeEventHandler<HTMLInputElement>;
  selected: Option["value"] | Option["value"][] | null;
}

export const Options = ({ options, onSelect, selected }: OptionsProps) => {
  return (
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
  );
};

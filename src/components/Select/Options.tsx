import { Option } from "./types";
import { OptionContainer, OptionsContainer } from "./style";

interface OptionsProps {
  options: Option[];
  onSingleSelect?: (value: Option["value"]) => void;
  onMultiSelect?: (value: Option["value"][]) => void;
  selected: Option["value"] | Option["value"][] | null;
}

export const Options = ({ options, onSingleSelect, onMultiSelect, selected }: OptionsProps) => {
  return (
    <OptionsContainer>
      {options.map((option) => {
        const checkboxId = option.value.toString();
        const isSelected = Array.isArray(selected)
          ? selected.includes(option.value.toString())
          : selected === option.value.toString();

        const onClickSelection = () =>
          onSingleSelect ? onSingleSelect(option.value) : onMultiSelect && onMultiSelect([option.value]);

        return (
          <OptionContainer onClick={onClickSelection} key={option.value}>
            {onMultiSelect && <input type="checkbox" id={checkboxId} value={option.value} checked={isSelected} />}
            <label htmlFor={checkboxId}>{option.label}</label>
          </OptionContainer>
        );
      })}
    </OptionsContainer>
  );
};

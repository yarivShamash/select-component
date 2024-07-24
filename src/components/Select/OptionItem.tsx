import { Option } from "./types";
import { OptionContainer } from "./style";
import { useCallback, useMemo } from "react";

interface OptionItemProps {
  option: Option;
  onSingleSelect?: (value: Option["value"]) => void;
  onMultiSelect?: (value: Option["value"][]) => void;
  selected: Option["value"] | Option["value"][] | null;
}

export const OptionItem = ({ option, onSingleSelect, onMultiSelect, selected }: OptionItemProps) => {
  const checkboxId = useMemo(() => option.value.toString(), [option.value]);
  const isSelected = useMemo(
    () => (Array.isArray(selected) ? selected.includes(option.value.toString()) : selected === option.value.toString()),
    [selected, option.value]
  );

  const onClickSelection = useCallback(
    () => (onSingleSelect ? onSingleSelect(option.value) : onMultiSelect && onMultiSelect([option.value])),
    [onMultiSelect, onSingleSelect, option.value]
  );

  return (
    <OptionContainer key={option.value}>
      <input
        type={onMultiSelect ? "checkbox" : "radio"}
        id={checkboxId}
        onChange={onClickSelection}
        value={option.value}
        checked={isSelected}
      />
      <label htmlFor={checkboxId}>{option.label}</label>
    </OptionContainer>
  );
};

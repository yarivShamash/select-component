import { styled } from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px 5px rgba(256, 256, 256, 0.1);
  max-width: fit-content;
`;

export const SelectTitle = styled.h3`
  margin-bottom: 0.5rem;
  height: fit-content;
  cursor: pointer;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 150px;
  margin-bottom: 0.5rem;
`;

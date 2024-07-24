import { styled } from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
`;

export const SelectTitle = styled.h3`
  margin-bottom: 0.5rem;
  height: fit-content;

  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: start;

  font-size: 1.5rem;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  background-color: #303030;

  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OptionContainer = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin-bottom: 0.5rem;
`;

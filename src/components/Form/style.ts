import { css, styled } from "styled-components";

const commonStyles = css`
  background-color: #303030;
  color: white;
  font-size: 1rem;

  border: none;
  border-radius: 0.25rem;

  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

export const FormInput = styled.input`
  width: 300px;
  ${commonStyles}
`;

export const SubmitButton = styled.input`
  max-width: 100px;
  align-self: flex-end;

  ${commonStyles}
`;

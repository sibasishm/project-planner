import styled from 'styled-components';

export const StyledSpan = styled.input.attrs({ type: 'checkbox' })`
  width: 1rem;
  height: 1rem;
  display: inline-block;
  vertical-align: middle;
  border-radius: 0.25rem;
  border: 1px solid gray;
  margin-right: 0.25rem;
`;

export const StyledLabel = styled.label`
  display: inline-block;
  vertical-align: middle;
`;

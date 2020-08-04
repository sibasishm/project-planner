import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${props => props.theme.colors.backgroundOffset};
  display: flex;
  justify-content: space-between;
  padding: 0 2em;

  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    padding: 0 5em;
  }
`;

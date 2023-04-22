import styled from 'styled-components';
export const Container = styled.div`
  padding: 20px 20px;
  margin: 0 auto;
  max-width: 480px;
  border-radius: 15px;
  background-color: ${props => props.theme.colors.colorBg};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.22), 0px 2px 2px rgba(0, 0, 0, 0.24),
    0px 2px 1px rgba(0, 0, 0, 0.32);
`;

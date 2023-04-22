import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.secondary};
  margin: 0 auto;

  text-align: center;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;

  color: ${props => props.theme.colors.primaryText};
  text-shadow: 1px 1px 1px ${props => props.theme.colors.white};
`;

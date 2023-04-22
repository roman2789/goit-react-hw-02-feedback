import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
  padding: 20px;
  overflow-y: hidden;

  border-radius: 5px;
  background-color: ${props => props.theme.colors.greyBg};
`;

export const StatItems = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

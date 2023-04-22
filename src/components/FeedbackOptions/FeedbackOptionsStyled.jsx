import styled from 'styled-components';

export const FeedbackSection = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.colorBg};
`;

export const FeedbackButtons = styled.button`
  height: 50px;
  width: 130px;
  border-radius: 10px;
  margin: 0 auto;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 800;
  line-height: 20px;
  background-color: ${props => props.theme.colors.greyBg};
  color: ${props => props.theme.colors.buttonText};
  box-shadow: -3px -3px 7px ${props => props.theme.colors.white},
    7px 7px 12px ${props => props.theme.colors.colorShadow};
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: -2px -2px 5px ${props => props.theme.colors.white},
      2px 2px 5px ${props => props.theme.colors.colorShadow};
  }
  &:active {
    background-color: ${props => props.theme.colors.grey};
    color: ${props => props.theme.colors.white};
    box-shadow: inset 1px 1px 2px ${props => props.theme.colors.white},
      inset -1px -1px 2px ${props => props.theme.colors.colorShadow};
  }
`;

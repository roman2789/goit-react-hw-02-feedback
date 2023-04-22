import PropTypes from 'prop-types';
import { Title, TitleContainer } from './SectionStyled';

const Section = ({ title, children }) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      {children}
    </TitleContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;

import PropTypes from 'prop-types';
import "./Section.css"

export const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Section;

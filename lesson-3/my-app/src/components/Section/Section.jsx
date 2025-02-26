import "./Section.css";

const Section = ({title, children}) => { // var {title, children} = props
  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Section;

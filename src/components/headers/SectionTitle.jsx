import "./headers.css";
const SectionTitle = ({ sectionTitle }) => {
  return (
    <>
      <h2 className="section-title">
        <span className="left-line"></span> {sectionTitle}
      </h2>
    </>
  );
};

export default SectionTitle;

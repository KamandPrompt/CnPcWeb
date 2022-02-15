import demo from "../images/demo.jpg";

export const Demo = (props) => {
  return (
    <div className="acadmic container demo blue">
      <h2 className="homehead">Student Demographics</h2>
      <img src={demo} className="demoimg" alt="Demographics" />
    </div>
  );
};

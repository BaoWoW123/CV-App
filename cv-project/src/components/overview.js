const Overview = (props) => {
  let general = props.props.general;
  return (
    <div className="overview">
      <div>
        Overview
        <div>
          {general.map((prop) => {
            return <p key={prop.id}>{prop.text}</p>;
          })}
        </div>
      </div>
      <div>Description</div>
      <div>Education</div>
      <div>Experience</div>
    </div>
  );
};

export default Overview;

const Overview = (props) => {
  let general = props.props.general;
  let experiences = props.props.experiences;
  let educations = props.props.educations;
  return (
    <div className="overview">
      <div className="displayGeneral">
        <div className="genMain">
          <div>
            {general[0] ? general[0].text : null}{" "}
            {general[1] ? general[1].text : null}
          </div>
          <div> {general[2] ? general[2].text : null} </div>
        </div>
        <div className="genOther">
          <div className="dispDescrip">
            {general[3] ? general[3].text : null}
          </div>
          <div className="dispContact">
            Phone: {general[4] ? general[4].text : null} Email:{" "}
            {general[5] ? general[5].text : null}
          </div>
        </div>
        <div></div>
      </div>
      <div className="displayExperience">
        <div>Experience</div>
        <div className="dispExpMain">
          {experiences.map((job) => {
            return (
              <div className="job">
                {job.expPosition}
                <div>
                  {job.expCompany} {job.expFrom} - {job.expTo}
                </div>
                <div>{job.expDescrip}</div>
              </div>
            );
          })}
        </div>
        <div>
          Education
          <div className="displayEdu"></div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

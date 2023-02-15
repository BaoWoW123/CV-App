const Overview = (props) => {
  let general = props.props[0];
  let experiences = props.props[1];
  let educations = props.props[2];
  if (!general) {
    return null;
  }
  if (!experiences) {
    return null;
  }

  if (!educations) {
    return null;
  }
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
              <div className="job" key={job.expTab.id}>
                {job.expTab.expPosition}
                <div>
                  {job.expTab.expCompany} {job.expTab.expFrom} - {job.expTab.expTo}
                </div>
                <div>{job.expTab.expDescrip}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="displayEducation">
        <div>Education</div>
        <div className="displayEduMain">
          {educations.map((edu) => {
            return (
              <div className="edu" key={edu.eduTab.id}>
                {edu.eduTab.eduDegree}
                <div>
                  {edu.eduTab.eduCollege} GPA {edu.eduTab.eduGpa}
                </div>
                <div>
                  {" "}
                  {edu.eduTab.eduCity}, {edu.eduTab.eduState} {edu.eduTab.eduFrom} - {edu.eduTab.eduTo}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Overview;

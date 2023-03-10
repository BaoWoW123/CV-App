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
              <div className="job" key={job.id}>
                {job.expPosition}
                <div>
                  {job.expCompany} {job.expFrom} - {job.expTo}
                </div>
                <div>{job.expDescrip}</div>
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
              <div className="edu" key={edu.id}>
                {edu.eduDegree}
                <div>
                  {edu.eduCollege} GPA {edu.eduGpa}
                </div>
                <div>
                  {" "}
                  {edu.eduCity}, {edu.eduState} {edu.eduFrom} - {edu.eduTo}
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

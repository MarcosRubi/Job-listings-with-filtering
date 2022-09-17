import { useContext } from "react";
import JobContext from "../context/JobContext";

function JobItem({ job }) {
   const { addCateg } = useContext(JobContext);
   return (
      <div className={`job__card ${job.featured ? "border" : ""}`}>
         <div className="d-flex-md align-center jc-between flex-column-sm">
            <div>
               <img src={job.logo} alt="Logo" />
            </div>
            <div className="job__info">
               <div className="d-flex align-center">
                  <span className="company">{job.company}</span>
                  {job.new ? <span className="badge badge--new">New!</span> :  "" }
                  {job.featured ? <span className="badge badge--featured">Featured</span> :  "" }
               </div>
               <p className="position">{job.position}</p>
               <span className="stats d-flex">
                  <span className="postedAt">{job.postedAt}</span>{" "}
                  <span className="break">*</span>
                  <span className="contract">{job.contract}</span>{" "}
                  <span className="break">*</span>
                  <span className="location">{job.location}</span>
               </span>
            </div>
            <hr />
            <ul className="categories d-flex flex-wrap">
               <li onClick={() => addCateg('role' , job.role)}>
                  <span>{job.role}</span>
               </li>
               <li onClick={() => addCateg('level',job.level)}>
                  <span>{job.level}</span>
               </li>
               {job.languages.map((language) => {
                  return (
                     <li
                        key={language.length}
                        onClick={() => addCateg('language', language)}
                     >
                        <span>{language}</span>
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
}

export default JobItem;

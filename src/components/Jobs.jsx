import { useContext } from "react";
import JobItem from "../components/JobItem";
import JobContext from "../context/JobContext";
import sleepImg from "../assets/sleep.svg";

function Jobs() {
   const { jobs } = useContext(JobContext);

   if (jobs.length === 0) {
      return (
         <>
            <h1 className="message">No hay trabajos</h1>
            <img src={sleepImg} alt="Sleep Image" className="sleepImg d-flex" />
         </>
      );
   }

   return (
      <section className="jobs">
         {jobs.map((job) => {
            return <JobItem job={job} key={job.id} />;
         })}
      </section>
   );
}

export default Jobs;

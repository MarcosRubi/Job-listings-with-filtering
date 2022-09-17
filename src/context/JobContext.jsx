import React, { createContext, useEffect, useState } from "react";
import data from "../data/data.json";
export const JobContext = createContext();

export function JobContextProvider(props) {
   const [jobs, setJobs] = useState([]);
   const [categRol, setCategRol] = useState(null);
   const [categLevel, setCategLevel] = useState(null);
   const [categLanguages, setCategLanguages] = useState([]);

   // Agrega la información del JSON una vez cargue
   useEffect(() => {
      setJobs(data);
   }, []);

   // Ejecuta la función que filtra los datos cuando detecta un cambio en cualquier categoria
   useEffect(() => {
      filterJobs();
   }, [categRol, categLevel, categLanguages]);

   // Valida la categoria y cambia su valor, en caso de ser languages lo agrega en un array
   function addCateg(type, value) {
      if (type === "role") {
         setCategRol(value);
         return;
      }
      if (type === "level") {
         setCategLevel(value);
         return;
      }

      setCategLanguages(
         [...categLanguages, value].filter(
            (lang, id) => [...categLanguages, value].indexOf(lang) === id
         )
      );
   }
   
   // Valida la categoria y elimina su valor, en caso de ser language lo elimina del array
   function removeCateg(type, value) {
      if (type === "role") {
         setCategRol(null);
      }
      if (type === "level") {
         setCategLevel(null);
      }
      setCategLanguages(categLanguages.filter((categ, id) => id !== value));

      setJobs(data)

   }

   // Resetea todos los valores a 0
   function clearAllCateg() {
      setCategRol(null);
      setCategLevel(null);
      setCategLanguages([]);
   }

   // Identifica que categorias están seleccionada y va filtrando los trabajos
   function filterJobs() {
      let arrResults = [...jobs] //Aquí se almacenarán los valores filtrados que luego se agregan a setJobs

      // Si ninguna categoria tiene valores se muestran todos los valores del JSON
      if ( categRol === null && categLevel === null && categLanguages.length === 0) {setJobs(data);return;}

      if(categRol !== null){
         arrResults = jobs.filter((job)=>job.role === categRol)
      }
      if(categLevel !== null){
         arrResults = arrResults.filter((job)=>job.level === categLevel)
      }
      if(categLanguages.length !== 0){
         categLanguages.map(categ=>{
            arrResults = arrResults.filter((job)=> job.languages.includes(categ) )
         })
      }

      //Agregamos los resultados que cumplan con todos los filtros
      setJobs(arrResults)
   }

   return (
      <JobContext.Provider
         value={{
            jobs,
            addCateg,
            removeCateg,
            clearAllCateg,
            categRol,
            categLevel,
            categLanguages,
         }}
      >
         {props.children}
      </JobContext.Provider>
   );
}

export default JobContext;

import { useContext } from "react";
import iconRemove from "../assets/icon-remove.svg";
import JobContext from "../context/JobContext";

function Header() {
   const {
      categRol,
      categLevel,
      categLanguages,
      clearAllCateg,
      removeCateg,
   } = useContext(JobContext);

   return (
      <header className={`container categories ${categRol !== null || categLevel !== null || categLanguages.length !== 0 ? 'visible' : ''} `}>
         <div className="d-flex jc-between align-center">
            <ul className="d-flex align-center flex-wrap">
               <li className={`d-flex align-center ${ categRol === null ? "hiden" : ""}`}>
                  <span>{categRol}</span>
                  <button className="d-flex align-center btn-remove" onClick={() => removeCateg("role")}>
                     <img src={iconRemove} alt="Remove" />
                  </button>
               </li>
               <li className={`d-flex align-center ${ categLevel === null ? "hiden" : "" }`}>
                  <span>{categLevel}</span>
                  <button className="d-flex align-center btn-remove" onClick={() => removeCateg("level")}>
                     <img src={iconRemove} alt="Remove" />
                  </button>
               </li>
               {categLanguages.map((language) => {
                  return (
                     <li className="d-flex align-center" key={categLanguages.indexOf(language)}>
                        <span>{language}</span>
                        <button
                           className="d-flex align-center btn-remove"
                           onClick={() => {
                              removeCateg(
                                 "language",
                                 categLanguages.indexOf(language)
                              );
                           }}
                        >
                           <img src={iconRemove} alt="Remove" />
                        </button>
                     </li>
                  );
               })}
            </ul>
            <div className="clear" onClick={()=>{clearAllCateg()}}>Clear</div>
         </div>
      </header>
   );
}

export default Header;

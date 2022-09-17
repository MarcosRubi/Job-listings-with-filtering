import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Attribution from "./components/Attribution";

function App() {
   return (
      <>
         <div className="hero"></div>
         <main className="main-container">
            <Header />
            <Jobs/>
            <Attribution />
         </main>
      </>
   );
}

export default App;

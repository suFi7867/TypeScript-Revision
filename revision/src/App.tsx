import Heading from "./components/Heading";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import FirstComponent from "./components/suFiyan";

function App() {

  const personName = {
    first  : "sufi",
    last:"Shaikh"
  }

  const personArray = [
    {
      first  : "sufi",
      last:"Shaikh"
    },
    {
      first  : "naaz",
      last:"Shaikh"
    },
    {
      first  : "saurabh",
      last:"Shaikh"
    }
  ]

  return (
    <div className="App">
       <FirstComponent  name="suFi" data={100}  isLoggedIn={false} />

       <Person name={personName}  />

       <PersonList data={personArray} personName={personName}   />

       <Status status="success" />
       <Status status="error" />
       <Status status="loading" />


       {/* //// Children text */}
       <Heading>My Heading</Heading>


    </div>
  );
}

export default App;

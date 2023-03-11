import Person from "./components/Person";
import PersonList from "./components/PersonList";
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
       <FirstComponent  name="suFi" data={100} />

       <Person name={personName}  />

       <PersonList data={personArray} />
    </div>
  );
}

export default App;

import Button from "./components/Button";
import Container from "./components/Container";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import LoggedIn from "./components/state/LoggedIn";
import UserComp from "./components/state/User";
import Status from "./components/Status";
import FirstComponent from "./components/suFiyan";

function App() {
  const personName = {
    first: "sufi",
    last: "Shaikh",
  };

  const personArray = [
    {
      first: "sufi",
      last: "Shaikh",
    },
    {
      first: "naaz",
      last: "Shaikh",
    },
    {
      first: "saurabh",
      last: "Shaikh",
    },
  ];

  return (
    <div className="App">
      <FirstComponent name="suFi" data={100} isLoggedIn={false} />

      <Person name={personName} />

      <PersonList data={personArray} personName={personName} />

      <Status status="success" />
      {/* <Status status="error" /> */}
      {/* <Status status="loading" /> */}

      {/* //// Children text */}
      <Heading>My Heading</Heading>

      {/* //// Component as a Children */}
      <Oscar>
        <Heading>Developer</Heading>
      </Oscar>
      

      {/* passing event  */}
      <Button handleClick={()=>alert("Button Clicked")} />

       {/* passing event  */}
      <Input value="sdad" handleChange={(event)=>console.log(event)} />


      {/* // to pass CSS as Props  */}
      <Container myCSS={{border:"1px solid red", padding:"1rem" }} />
      <Container myCSS={{border:"5px solid green", padding:"0.5rem" }} />


{/* Pklaying with States */}
      <LoggedIn  />
      <UserComp />







    </div>
  );
}

export default App;

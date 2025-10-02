import OuterContainer from "./Components/OuterContainer";
import InnerContainer from "./Components/InnerContainer";
import Days from "./Components/Days";
import Hours from "./Components/Hours";
import Minutes from "./Components/Minutes";
import Seconds from "./Components/Seconds";
import All_In_One from "./ClockLogics/All_In_One";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <All_In_One>
        <OuterContainer>
          <Header></Header>
          <InnerContainer>
            <Days></Days>
            <Hours></Hours>
            <Minutes></Minutes>
            <Seconds></Seconds>
          </InnerContainer>
        </OuterContainer>
      </All_In_One>
    </>
  );
}

export default App;

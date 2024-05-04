import { useState } from "react";
import Search from "./components/Search";
import Navi from "./components/Navi";
import './App.css';
import FoodList from "./components/FoodList";
import FoodDetail from "./components/FoodDetail";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("622598");
  return (
    <div>
      <Navi />
      <Search setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
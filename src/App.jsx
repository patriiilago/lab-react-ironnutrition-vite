import "./App.css";
import foodsJson from './foods.json'
import { useState } from 'react'
import FoodBox from "./components/FoodBox";

function App() {

  const [foods, setFoods] = useState(foodsJson);

  const removeFood = foodIDDelete => {
    const listFood = foods.filter(elm => elm.id != foodIDDelete)
    setFoods(listFood)
  }



  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {
        foods.map(food => {
          return <FoodBox key={food.id} food={food} removeFood={removeFood} />
        })
      }
    </div>

  );
}

export default App;

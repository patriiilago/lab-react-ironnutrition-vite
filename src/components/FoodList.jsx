import FoodBox from './FoodBox'
import AddFoodForm from './AddFoodForm'
import { useState } from 'react'
import foodsJson from './../foods.json'
import './FoodList.css'


const FoodList = () => {

    const [foods, setFoods] = useState(foodsJson);

    const removeFood = foodIDDelete => {
        const listFood = foods.filter(elm => elm.id != foodIDDelete)
        setFoods(listFood)
    }

    const addFoodForm = newFood => {
        const foodsCopy = [...foods, newFood]
        setFoods(foodsCopy)
    }


    return (
        <div className="App">
            <h1>LAB | React IronNutrition</h1>
            <p className='AppList'>


                <AddFoodForm addFoodForm={addFoodForm} />
                {
                    foods.map(food => {
                        return <FoodBox key={food.id} food={food} removeFood={removeFood} />
                    })
                }
            </p>
        </div>


    )
}
export default FoodList
// Your code here
import React from "react"


function FoodBox({ food, removeFood }) {
    const { name, calories, image, servings } = food



    return (



        <div className="foodBox">
            <p>{name}</p>
            <img src={image} />
            <p>Calories: {calories}</p>
            <p>Servings: {servings}</p>
            <p>
                <b>Total Calories: {servings * calories} </b> kcal
            </p>

            <button on onClick={() => removeFood(food.id)}>Delete</button>
        </div>

    )

}
export default FoodBox

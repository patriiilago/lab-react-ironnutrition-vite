// Your code here
import { Card, Col, Button } from "antd";
import React from "react"


const FoodBox = ({ food, removeFood }) => {

    return (
        <div className="foodBox" style={{ width: 230, height: 300, margin: 10 }}>
            <p>{food.name}</p>
            <img src={food.image} height={60} alt={food.name} />
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p>
                <b>Total Calories: {food.servings * food.calories} </b> kcal
            </p>

            <button on onClick={() => removeFood(food.id)}>Delete</button>
        </div>

    )

}
export default FoodBox

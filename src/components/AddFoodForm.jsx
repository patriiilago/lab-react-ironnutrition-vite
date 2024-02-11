// Your code here

import { Divider, Input, Button } from "antd";
import { useState } from "react"
import './AddFoodForm.css'


const AddFoodForm = ({ addFoodForm }) => {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleNameChange = event => setName(event.target.value)
    const handleImageChange = event => setImage(event.target.value)
    const handleCaloriesChange = event => setCalories(event.target.value)
    const handleServingsChange = event => setServings(event.target.value)

    const handleFormSubmit = event => {
        event.preventDefault()

        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }

        addFoodForm(newFood)

    }

    return (
        <div className="AddFood">
            <h3>New Food</h3>

            <form onSubmit={handleFormSubmit}>
                <label >
                    Name
                    <input value={name} type="text" onChange={handleNameChange} />
                </label>

                <label>
                    Image
                    <input value={image} type="url" onChange={handleImageChange} />
                </label>

                <label>
                    Calories
                    <input value={calories} type="number" onChange={handleCaloriesChange} />
                </label>

                <label>
                    Servings
                    <input value={servings} type="number" onChange={handleServingsChange} />
                </label>

                <button type="submit">CREAR COMIDA</button>

            </form>

        </div>

    )

}

export default AddFoodForm

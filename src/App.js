import React, { useState } from "react";
import api from "./services/api";

import {
  Container,
  Button,
  MealName,
  MealIngredient,
  MealInstruction,
  MealInformation,
  MealPicture,
  MealContainer
} from "./styled";

function App() {
  const [meal, setMeal] = useState(null);

  const loadRandomMeal = async () => {
    const meal = await api.get("");

    setMeal(meal.data.meals.shift());
  };

  return (
    <Container>
      <Button onClick={loadRandomMeal}>Random Meal</Button>
      {meal && (
        <>
          <MealContainer>
            <MealInformation>
              <MealName>{meal.strMeal}</MealName>
              <MealIngredient>
                {meal.strMeasure1} {meal.strIngredient1}
              </MealIngredient>
              <MealIngredient>
                {meal.strMeasure2} {meal.strIngredient2}
              </MealIngredient>
              <MealIngredient>
                {meal.strMeasure3} {meal.strIngredient3}
              </MealIngredient>
              <MealIngredient>
                {meal.strMeasure4} {meal.strIngredient4}
              </MealIngredient>
              <MealIngredient>
                {meal.strMeasure5} {meal.strIngredient5}
              </MealIngredient>
              <MealIngredient>
                {meal.strMeasure6} {meal.strIngredient6}
              </MealIngredient>
              <MealIngredient>
                {meal.strMeasure7} {meal.strIngredient7}
              </MealIngredient>
              <MealIngredient>
                {meal.strMeasure8} {meal.strIngredient8}
              </MealIngredient>
              <MealIngredient>
                {meal.strMeasure9} {meal.strIngredient9}
              </MealIngredient>
              <MealIngredient>
                {meal.strMeasure10} {meal.strIngredient10}
              </MealIngredient>
              <MealIngredient>
                {meal.strMeasure11} {meal.strIngredient11}
              </MealIngredient>
              <MealIngredient>
                {meal.strMeasure12} {meal.strIngredient12}
              </MealIngredient>
              <MealIngredient>
                {meal.strMeasure13} {meal.strIngredient13}
              </MealIngredient>
              <MealIngredient>
                {meal.strMeasure14} {meal.strIngredient14}
              </MealIngredient>
              <MealIngredient>
                {meal.strMeasure15} {meal.strIngredient15}
              </MealIngredient>
              <MealIngredient>
                {meal.strMeasure16} {meal.strIngredient16}
              </MealIngredient>
              <MealIngredient>
                {meal.strMeasure17} {meal.strIngredient17}
              </MealIngredient>
              <MealIngredient>
                {meal.strMeasure18} {meal.strIngredient18}
              </MealIngredient>
              <MealIngredient>
                {meal.strMeasure19} {meal.strIngredient19}
              </MealIngredient>
              <MealIngredient>
                {meal.strMeasure20} {meal.strIngredient20}
              </MealIngredient>
            </MealInformation>
            <MealPicture src={meal.strMealThumb} />
          </MealContainer>
          <MealInstruction>{meal.strInstructions}</MealInstruction>
        </>
      )}
    </Container>
  );
}

export default App;

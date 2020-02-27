import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: 0 none;
  background-color: #c33;
  color: #fff;
  font-weight: bold;
  border-radius: 4px;

  &:hover {
    opacity: 0.8;
  }
`;

export const MealName = styled.h1``;

export const MealIngredient = styled.p``;

export const MealContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const MealInformation = styled.div`
  flex: 1 50%;
`;

export const MealPicture = styled.img`
  flex: 1 50%;
`;

export const MealInstruction = styled.p`
  text-align: justify;
`;

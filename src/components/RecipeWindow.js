import React from 'react';
import './RecipeWindow.css';

const RecipeWindow = ({ recipes }) => {
    return (
        <div className = "recipe-window">
            {recipes.map((recipe) => (
                <div 
                className = "recipe" 
                key = {`${recipe.recipe.label}--${Date.now()}`} 
                onClick = {window.open(recipe.recipe.url)}>
                    <h2>{recipe.recipe.label}</h2>
                    <img src = {recipe.recipe.image} alt= {recipe.recipe.label} />
                </div>
            ))}
        </div>
    )
}

export default RecipeWindow

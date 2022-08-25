import React from 'react';
import './Cocktail.css';

const Cocktail = (props) => {

    const ingredient = () => {
        let cocktail = props.cocktail;
        let ingredientList = [];
        for (let i = 1; i < 16; i++) {
            let ingredient = `strIngredient${i}`;
            let measure = `strMeasure${i}`;
            if (cocktail[ingredient] == null) {
                break;
            }
            ingredientList.push(cocktail[measure] + ' : ' + cocktail[ingredient]);
        }
        // console.log(ingredientList);
        return ingredientList;
    }


    return (
        <div className='cocktailCard'>
            <div className='cocktailImg'><img className='cocktailThumb' src={props.cocktail.strDrinkThumb} /></div>
            <div className='cocktailDetails'>
                <h2>{props.cocktail.strDrink}</h2>
                {ingredient().map((ing, i) => <p key={i}>{ing}</p>)}
                <br/>
                <h4>Instruction</h4><p>{props.cocktail.strInstructions}</p>
            </div>
        </div>
    )

}

export default Cocktail;
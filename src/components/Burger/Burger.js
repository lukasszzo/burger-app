import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger=(props)=>{
const transformedIngredient=Object.keys(props.ingredients).map(idKey=>{
  return [...Array(props.ingredients[idKey])].map((_,i)=>{
    <BurgerIngredient key={idKey+i} type={idKey}/>
  })
});
  return(
    <div className={classes.Burger}>
        <BurgerIngredient type='bread-top'/>
        <BurgerIngredient type='cheese'/>
        <BurgerIngredient type='meat'/>
        <BurgerIngredient type='bread-bottom'/>
     </div>
  );
}

export default burger;

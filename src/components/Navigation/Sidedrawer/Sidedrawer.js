import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Sidedrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sidedrawer=(props)=>{
  let attachedClasses=[classes.Sidedrawer,classes.Close];
  if(props.open){
    attachedClasses=[classes.Sidedrawer,classes.Open];
  }

  return (
    <Aux>
     <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <Logo height="11%" margin-bottom="32px"/>
        <nav>
        <NavigationItems />
        </nav>

     </div>
     </Aux>);
};

export default sidedrawer;

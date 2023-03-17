import React, {useState} from 'react';
import './Dicer.css';
import {Route} from 'react-router-dom';

import DiceImage1 from '../images/dice-png-1.png';
import DiceImage2 from '../images/dice-png-2.png';
import DiceImage3 from '../images/dice-png-3.png';
import DiceImage4 from '../images/dice-png-4.png';
import DiceImage5 from '../images/dice-png-5.png';
import DiceImage6 from '../images/dice-png-6.png';
import Win from './Win';
function Dicer( ){
     var diceImages = [
        DiceImage1,
        DiceImage2,
        DiceImage3,
        DiceImage4,
        DiceImage5,
        DiceImage6,
    ]
    const [newImage,setNewImage] = useState(diceImages[0]);
    const [newImage2,setNewImage2] = useState(diceImages[1]);
   
    const roll = () => {
        var randomNumber = Math.floor(Math.random()*6);
        var randomNumber2 = Math.floor(Math.random()*6);
        setNewImage(diceImages[randomNumber]);
        setNewImage2(diceImages[randomNumber2]);
       

    }
    


    return(
        <div className='container'>
        <img className='square' src={newImage}></img>
        <div style={{width:'5px', display : 'inline-block'}}></div>
        <button type="button" class="btn btn-outline-primary" onClick={roll}>Roll Dice</button>
        <img className='square' src={newImage2}></img>
        {newImage==newImage2 && <h2> Tebriklerr Kazandinizzz !!!!!!</h2>}
        
        
        
        </div>
        
    )

}

export default Dicer;
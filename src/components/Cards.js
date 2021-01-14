import React from 'react';
import GameInfo from './GameInfo'
import {cards} from './Cards/cardsArray';


class Cards extends React.Component {
    characters = [];
    handleClick = (event) => {
        let character = event.target;
        if (character.getAttribute("check") === "found") {
           
          return;
        }
    
        if (character !== this.characters[0]) {
          this.switch(character);
          this.characters.push(character);
        } else {
          this.switch(character);
          this.characters = [];
        }
    
        if (this.characters.length > 2) {
          if (!this.checkNo(this.characters[0], this.characters[1])) {
            this.switch(this.characters[0]);
            this.switch(this.characters[1]);
            this.characters.shift();
            this.characters.shift();
          } else {
            this.characters.shift();
            this.characters.shift();
          }
        }
        let allPictures = document.getElementsByClassName("card-blank");
        if (allPictures.length < 1) {
          this.props.restart(true);
          this.props.score(false)
          let reset = document.getElementsByClassName("card");
          for (let i = 0; i < reset.length; i++) {
            reset[i].classList.add("card-blank");
            reset[i].setAttribute("check", "false");
            this.characters = [];
          }
        }
      };

    checkNo = (character1, character2) => {
        if(character1.getAttribute("cardno") === character2.getAttribute("cardno")){
            character1.setAttribute("check", "found");
            character2.setAttribute("check", "found");
            this.props.score(true)
            return true;
        }
        return false;
    }


    switch = (target) => {
        if(target.getAttribute("check") === "true"){
            target.setAttribute("check", "false");
            target.classList.add("card-blank");
        }else{
            target.setAttribute("check", "true");
            target.classList.remove("card-blank")
        }
    }

    render() { 
        return ( 
            <div className="cards">
                {cards.sort(() => Math.random() -0.5).map((el) => {
                    return (
                        <div className="card card-blank"
                        cardno={el.cardno}
                        style={{background: `url(${el.img})`}}
                        check="false"
                        onClick={this.handleClick}/>
                    )
                })}
            </div>
         );
    }
}
 
export default Cards;
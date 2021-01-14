import React from 'react';
import {cards} from './Cards/cardsArray';
let fiveTries = 5;

class Cards extends React.Component {

    thumbnails = [];
    handleClick = (event) => {
        let thumbnail = event.target;
        if (thumbnail.getAttribute("check") === "found") {           
          return;
        }
    
        if (thumbnail !== this.thumbnails[0]) {
          this.switch(thumbnail);
          this.thumbnails.push(thumbnail);
        } else {
          this.switch(thumbnail);
          this.thumbnails = [];
        }
    
        if (this.thumbnails.length > 2) {
          if (!this.checkNo(this.thumbnails[0], this.thumbnails[1])) {
            this.switch(this.thumbnails[0]);
            this.switch(this.thumbnails[1]);
            this.thumbnails.shift();
            this.thumbnails.shift();
          } else {
          
            this.thumbnails.shift();
            this.thumbnails.shift();
          }
        }
      
        
        let allPictures = document.getElementsByClassName("card-blank");
        if (allPictures.length < 1) {
          this.props.restart(true);
          
          let reset = document.getElementsByClassName("card");
          for (let i = 0; i < reset.length; i++) {
            reset[i].classList.add("card-blank");
            reset[i].setAttribute("check", "false");
            this.thumbnails = [];
          }
        }
      };

    checkNo = (thumbnail1, thumbnail2) => {
        if(thumbnail1.getAttribute("cardno") === thumbnail2.getAttribute("cardno")){
            thumbnail1.setAttribute("check", "found");
            thumbnail2.setAttribute("check", "found");
            this.props.score()
            return true;
        }
        this.props.tries()
        return false;
    }

   
    switch = (target) => {
    
        if(target.getAttribute("check") === "true"){
            target.setAttribute("check", "false");
            target.classList.add("card-blank");
           fiveTries = fiveTries - 0.5;
           console.log(fiveTries)
           if(fiveTries === 0){
              this.props.restart(true);
              let reset = document.getElementsByClassName("card");
              for (let i = 0; i < reset.length; i++) {
                reset[i].classList.add("card-blank");
                reset[i].setAttribute("check", "false");
                this.thumbnails = [];
              }
           }
            
        }else{
            target.setAttribute("check", "true");
            target.classList.remove("card-blank")
        }
    }

    render() { 
        return ( 
            <div className="cards">{
              /* 
            Ukoliko se na math.random() doda - 0.5 ili bilo sta za random raspored karata, svaki put na "found" sve karte se ponovo izmijesaju (cak i one otkrivene) */}
                {cards.sort(() => Math.random()).map((el, index) => {
                    return (
                        <div className="card card-blank"
                        cardno={el.cardno}
                        key={index}
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
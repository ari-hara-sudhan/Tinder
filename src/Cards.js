import React, { useState } from 'react'
import "./Cards.css"
import TinderCard from 'react-tinder-card'

function Cards() {
    const [persons,setPersonss]=useState([{
        username:"elon",
        image:"https://www.bing.com/th?id=OIP.wI7SgTdiBDdXkhG0DbrAmwHaEl&w=236&h=137&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
    },{
        username:"elon",
        image:"https://www.bing.com/th?id=OIP.wI7SgTdiBDdXkhG0DbrAmwHaEl&w=236&h=137&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
    }
])
const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }
  
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }
    return (
        <div>
            
           <div className="cards__container">
           {
                    persons.map(person=>(
                    
                        <TinderCard className="swipe" key={person.name} onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
                            <div
                            style={{backgroundImage:`url(${person.image})`}}
                             className="card">
                            <h3>{person.username}</h3>
                            </div>

                        </TinderCard>
                      
                    ))
                }
           </div>
              
            
        </div>
    )
}

export default Cards

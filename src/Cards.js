import React, { useState,useEffect } from 'react'
import "./Cards.css"
import TinderCard from 'react-tinder-card'
import db from './firebase'

function Cards() {
const [persons,setPersons]=useState([])
const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }
  
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }

  useEffect(() => {
     
    db.collection("persons").onSnapshot(snapshot=>{
        setPersons(snapshot.docs.map(doc=>({
            id:doc.id,
            person:doc.data()
        })))
    })
  }, [])
    return (
        <div>
            
           <div className="cards__container">
           {
                    persons.map(({id,person})=>(
                    
                        <TinderCard className="swipe" key={id} onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
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

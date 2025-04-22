"use client"

import { useContext } from "react"
import CardItem from "./CardItem"
import { CardContext } from "../context/CardContext"

const CardList = () => {
  const { filteredCards } = useContext(CardContext)

  return (
    <ul id="cardList" className="card-list">
      {filteredCards.length === 0 ? (
        <li className="card-item">No cards found</li>
      ) : (
        filteredCards.map((card) => <CardItem key={card.id} card={card} />)
      )}
    </ul>
  )
}

export default CardList

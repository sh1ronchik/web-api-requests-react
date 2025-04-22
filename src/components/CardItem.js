"use client"

import { useContext } from "react"
import { CardContext } from "../context/CardContext"

const CardItem = ({ card }) => {
  const { selectCard, selectedCard } = useContext(CardContext)

  const isSelected = selectedCard && selectedCard.id === card.id

  return (
    <li className={`card-item ${isSelected ? "selected" : ""}`} onClick={() => selectCard(card)}>
      {card.name}
    </li>
  )
}

export default CardItem
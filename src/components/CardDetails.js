"use client"

import { useContext } from "react"
import { CardContext } from "../context/CardContext"

const CardDetails = () => {
  const { selectedCard } = useContext(CardContext)

  if (!selectedCard) {
    return (
      <div className="card-details">
        <p>Select a card to view details</p>
      </div>
    )
  }

  return (
    <div className={`card-details ${selectedCard ? "show" : ""}`}>
      <h2 className="card-name">{selectedCard.name}</h2>
      {selectedCard.imageUrl && (
        <img src={selectedCard.imageUrl || "/placeholder.svg"} alt={selectedCard.name} className="card-image" />
      )}
      <p className="card-text">
        <strong>Set:</strong> {selectedCard.set}
      </p>
      <p className="card-text">
        <strong>Rarity:</strong> {selectedCard.rarity}
      </p>
      <p className="card-text">
        <strong>Type:</strong> {selectedCard.type}
      </p>
      <p className="card-text">
        <strong>Text:</strong> {selectedCard.text || "No text available"}
      </p>
      {selectedCard.purchaseUrls && selectedCard.purchaseUrls.tcgplayer && (
        <p className="card-text">
          <a href={selectedCard.purchaseUrls.tcgplayer} target="_blank" rel="noopener noreferrer" className="card-link">
            Buy on TCGPlayer
          </a>
        </p>
      )}
    </div>
  )
}

export default CardDetails

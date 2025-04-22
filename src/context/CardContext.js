"use client"

import { createContext, useState, useEffect } from "react"

export const CardContext = createContext()

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([])
  const [filteredCards, setFilteredCards] = useState([])
  const [selectedCard, setSelectedCard] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchCards()
  }, [])

  const fetchCards = async () => {
    try {
      setLoading(true)
      const response = await fetch("https://api.magicthegathering.io/v1/cards")
      const data = await response.json()

      // Remove duplicate card names
      const uniqueCards = []
      const cardNames = new Set()

      data.cards.forEach((card) => {
        if (!cardNames.has(card.name)) {
          cardNames.add(card.name)
          uniqueCards.push(card)
        }
      })

      setCards(uniqueCards)
      setFilteredCards(uniqueCards)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching cards:", error)
      setError("Failed to load cards. Please try again later.")
      setLoading(false)
    }
  }

  const searchCards = (query) => {
    const lowercaseQuery = query.toLowerCase()
    const filtered = cards.filter((card) => card.name.toLowerCase().includes(lowercaseQuery))
    setFilteredCards(filtered)
  }

  const selectCard = (card) => {
    setSelectedCard(card)
  }

  return (
    <CardContext.Provider
      value={{
        cards,
        filteredCards,
        selectedCard,
        loading,
        error,
        searchCards,
        selectCard,
      }}
    >
      {children}
    </CardContext.Provider>
  )
}

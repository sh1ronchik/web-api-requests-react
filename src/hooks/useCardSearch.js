"use client"

import { useContext, useState, useEffect } from "react"
import { CardContext } from "../context/CardContext"

export const useCardSearch = () => {
  const { searchCards } = useContext(CardContext)
  const [searchTerm, setSearchTerm] = useState("")
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("")

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
    }, 300)

    return () => {
      clearTimeout(timerId)
    }
  }, [searchTerm])

  useEffect(() => {
    searchCards(debouncedSearchTerm)
  }, [debouncedSearchTerm, searchCards])

  return {
    searchTerm,
    handleSearchChange,
  }
}

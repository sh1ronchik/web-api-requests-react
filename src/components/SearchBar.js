"use client"
import { useCardSearch } from "../hooks/useCardSearch"

const SearchBar = () => {
  const { searchTerm, handleSearchChange } = useCardSearch()

  return (
    <input
      type="text"
      id="searchInput"
      className="search-input"
      placeholder="Search for a card..."
      value={searchTerm}
      onChange={handleSearchChange}
    />
  )
}

export default SearchBar

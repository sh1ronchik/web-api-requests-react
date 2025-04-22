"use client"
import CardList from "./CardList"
import CardDetails from "./CardDetails"
import LoadingSpinner from "./LoadingSpinner"
import ErrorMessage from "./ErrorMessage"
import { useContext } from "react"
import { CardContext } from "../context/CardContext"

const MainContent = () => {
  const { loading, error } = useContext(CardContext)

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  return (
    <main className="main-content">
      <CardList />
      <CardDetails />
    </main>
  )
}

export default MainContent

import { CardProvider } from "./context/CardContext"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import "./styles/App.css"

function App() {
  return (
    <div className="app">
      <CardProvider>
        <Header />
        <MainContent />
      </CardProvider>
    </div>
  )
}

export default App

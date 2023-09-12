import {useState} from 'react'
import Header from './components/Header'
import ShopyCard from './components/ShopyCard'
import MediumLevel from './components/MediumLevel'
import Advanced from './components/Advanced'

import './App.css'

const App = () => {
  const [activeId, setActiveId] = useState('Basic')

  const clickBtn = id => setActiveId(id)

  const renderSpecificCard = () => {
    switch (activeId) {
      case 'Basic':
        return <ShopyCard />
      case 'Shopify':
        return <MediumLevel />
      case 'Advanced':
        return <Advanced />

      default:
        return null
    }
  }
  return (
    <div>
      <Header />
      <div className="banner-container">
        <div className="button-banner-container">
          <button type="button" className="month-btn">
            Pay Monthly
          </button>
          <button type="button" className="year-btn">
            Pay Yearly (save 25%)
          </button>
        </div>
        <div className="cards-container">
          <ShopyCard />
          <MediumLevel />
          <Advanced />
        </div>
        <div>
          <div>
            <button
              type="button"
              onClick={() => clickBtn('Basic')}
              className="app-btn"
            >
              Basic
            </button>
            <button
              type="button"
              onClick={() => clickBtn('Shopify')}
              className="app-btn"
            >
              Shopify
            </button>
            <button
              type="button"
              onClick={() => clickBtn('Advanced')}
              className="app-btn"
            >
              Advanced
            </button>
          </div>
          <div className="single-card-container">{renderSpecificCard()}</div>
        </div>
      </div>
    </div>
  )
}
export default App

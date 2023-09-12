import {FaRupeeSign} from 'react-icons/fa'
import './index.css'

const ShopyCard = () => (
  <div className="card-container">
    <button type="button" className="btn-popular">
      Most Popular
    </button>
    <div className="structure-container">
      <h1 className="basic">Basic</h1>
      <p className="big-description">FOR INDIVIDUALS & SMALL BUSINESSES</p>
      <p className="description">
        Everything you need to create your store. ship products and process
        payments
      </p>
      <div className="price-container">
        <FaRupeeSign className="icon-element" />
        <h1>1,994</h1>
        <div>
          <p className="inr-mo">
            INR <br />
            /mo
          </p>
        </div>
      </div>
    </div>
    <div className="note-container">
      <p className="big-description">Get your first 3 months for </p>
      <FaRupeeSign className="icon" />
      <p className="big-description">20/mo</p>
    </div>
    <div className="structure-container">
      <h1 className="big-description">What included on Basic</h1>
      <div>
        <div className="correct-container">
          <img
            src="https://res.cloudinary.com/dj6c4lrt9/image/upload/v1694495865/correct_icon_nhwtqy.webp"
            alt="correct icon"
            className="correct-icon"
          />
          <p className="description correct-description">Basic reports</p>
        </div>
        <div className="correct-container">
          <img
            src="https://res.cloudinary.com/dj6c4lrt9/image/upload/v1694495865/correct_icon_nhwtqy.webp"
            alt="correct icon"
            className="correct-icon"
          />
          <p className="description correct-description">
            Up to 1000 inventory locations
          </p>
        </div>
        <div className="correct-container">
          <img
            src="https://res.cloudinary.com/dj6c4lrt9/image/upload/v1694495865/correct_icon_nhwtqy.webp"
            alt="correct icon"
            className="correct-icon"
          />
          <p className="description correct-description">2 staff accounts</p>
        </div>
      </div>
    </div>
    <button type="button" className="try-for-free">
      Trt for free
    </button>
  </div>
)
export default ShopyCard

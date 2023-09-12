// Write your code here.
import {FaRupeeSign} from 'react-icons/fa'
import './index.css'

const MediumLevel = () => (
  <div className="card-container">
    <div className="structure-container">
      <h1 className="basic">Shopify</h1>
      <p className="big-description">FOR SMALL BUSINESSES</p>
      <p className="description">
        Level up your business with professional reporting and more staff
        accounts
      </p>
      <div className="price-container">
        <FaRupeeSign className="icon-element" />
        <h1>7,447</h1>
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
      <h1 className="big-description">What included on Shopify</h1>
      <div>
        <div className="correct-container">
          <img
            src="https://res.cloudinary.com/dj6c4lrt9/image/upload/v1694495865/correct_icon_nhwtqy.webp"
            alt="correct icon"
            className="correct-icon"
          />
          <p className="description correct-description">
            Professional reports
          </p>
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
          <p className="description correct-description">5 staff accounts</p>
        </div>
      </div>
    </div>
    <button type="button" className="try-for-free">
      Trt for free
    </button>
  </div>
)
export default MediumLevel

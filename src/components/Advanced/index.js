/* const imagesList = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
    imageAltText: 'nature mountain with pond',
    thumbnailAltText: 'nature mountain with pond thumbnail',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
    imageAltText: 'nature sunset',
    thumbnailAltText: 'nature sunset thumbnail',
  },
  {
    id: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
    imageAltText: 'nature mountain with ocean',
    thumbnailAltText: 'nature mountain with ocean thumbnail',
  },
  {
    id: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
    imageAltText: 'nature mountain with forest',
    thumbnailAltText: 'nature mountain with forest thumbnail',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
    imageAltText: 'nature leaves',
    thumbnailAltText: 'nature leaves thumbnail',
  },
  {
    id: 5,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
    imageAltText: 'nature tree',
    thumbnailAltText: 'nature tree thumbnail',
  },
  {
    id: 6,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
    imageAltText: 'nature waterfall',
    thumbnailAltText: 'nature waterfall thumbnail',
  },
  {
    id: 7,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-river-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png',
    imageAltText: 'nature river',
    thumbnailAltText: 'nature river thumbnail',
  },
] */

// Write your code here.

import {FaRupeeSign} from 'react-icons/fa'
import './index.css'

const Advanced = () => (
  <div className="card-container">
    <div className="structure-container">
      <h1 className="basic">Advanced</h1>
      <p className="big-description">FOR MEDIUM TO LARGE BUSINESSES</p>
      <p className="description">
        Get the best of Shopify with custom reporting and our lowest transaction
        fees
      </p>
      <div className="price-container">
        <FaRupeeSign className="icon-element" />
        <h1>30,164</h1>
        <div>
          <p className="inr-mo">
            INR <br />
            /mo
          </p>
        </div>
      </div>
    </div>
    <div className="note-container">
      <p className="big-description">GET your first 3 months for </p>
      <FaRupeeSign className="icon" />
      <p className="big-description">20/mo</p>
    </div>
    <div className="structure-container">
      <h1 className="big-description">What included on Advanced</h1>
      <div>
        <div className="correct-container">
          <img
            src="https://res.cloudinary.com/dj6c4lrt9/image/upload/v1694495865/correct_icon_nhwtqy.webp"
            alt="correct icon"
            className="correct-icon"
          />
          <p className="description correct-description">
            Custom report builder
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
          <p className="description correct-description">15 staff accounts</p>
        </div>
      </div>
    </div>
    <button type="button" className="try-for-free">
      Trt for free
    </button>
  </div>
)
export default Advanced

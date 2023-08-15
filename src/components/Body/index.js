import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-nav-container">
              <h1 className="left-heading">Left Navbar Menu</h1>
              <ul className="ul-list">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h1 className="left-heading">Content</h1>
              <p className="content-para">
                Lorem ipsum dolor sit amet consectetur adipicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-nav-container">
              <h1 className="left-heading">Right Navbar Menu</h1>
              <div className="nav-box-container">
                <p className="box">Ad 1</p>
                <p className="box">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body

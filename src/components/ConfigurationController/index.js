import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="c-c-container">
          <div className="card">
            <h1 className="heading">layout</h1>
            <div className="check-box-container">
              <div className="check-container">
                <input
                  id="content"
                  type="checkbox"
                  checked={showContent}
                  onChange={onChangeContent}
                />
                <label className="label-title" htmlFor="content">
                  Content
                </label>
              </div>
              <div className="check-container">
                <input
                  id="leftNavbar"
                  type="checkbox"
                  checked={showLeftNavbar}
                  onChange={onChangeLeftNavbar}
                />
                <label className="label-title" htmlFor="leftNavbar">
                  Left Navbar
                </label>
              </div>
              <div className="check-container">
                <input
                  id="rightNavbar"
                  type="checkbox"
                  checked={showRightNavbar}
                  onChange={onChangeRightNavbar}
                />
                <label className="label-title" htmlFor="rightNavbar">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController

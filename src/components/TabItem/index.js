import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const clickTab = () => {
    onClickTab(tabId)
  }

  const tabClassName = isActive ? 'active' : 'not-active'
  const paraClassName = isActive ? 'paraClassName' : 'not-activepara'

  return (
    <li className={`tab-list-item ${tabClassName}`} onClick={clickTab}>
      <button type="button" className={paraClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

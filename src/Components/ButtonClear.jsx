

import '../style/Button.css'
export default function ButtonClear({children,settingClear}) {
  return (
    <div className="clear" onClick={settingClear}>
        {children}
    </div>
  )
}
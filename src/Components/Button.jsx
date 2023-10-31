
import '../style/Button.css'

export default function Button({children,settingClick}) {

    const operator= valor =>{
        return isNaN(valor)&& (valor != '.') && (valor != '=')
    }

  return (
    
    <div className={`buttonContainer ${operator(children)? 'operator': ''}`.trim()} onClick={()=> settingClick(children)}>
        {children}
    </div>
    
  )
}
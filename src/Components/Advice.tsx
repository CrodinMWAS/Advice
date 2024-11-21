import dividerMobile from "../../images/pattern-divider-mobile.svg"
import dividerDesktop from "../../images/pattern-divider-desktop.svg"
import dice from "../../images/icon-dice.svg"

const Advice = () => {
    
  return (
    <div className="card">
        <p>Advice #1</p>
        <h2>Lingan guli guli</h2>
        <img src={dividerDesktop} className="dividerDesktop" alt="" />
        <img src={dividerMobile} className="dividerMobile" alt="" />
        <div className="dice">
            <img src={dice} alt="" />
        </div>
    </div>
  )
}

export default Advice
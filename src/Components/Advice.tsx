import dividerMobile from "../../images/pattern-divider-mobile.svg"
import dividerDesktop from "../../images/pattern-divider-desktop.svg"
import dice from "../../images/icon-dice.svg"
import { useEffect, useState } from "react"

type AdviceType = {
    id:number,
    advice:string
}

const Advice = () => {
    const [advice, setAdvice] = useState<AdviceType>()

    const fetchAdvice = async()=>{
        try {
            const response = await fetch("https://api.adviceslip.com/advice")
            if (!response.ok) {
                throw new Error
            }
            const data = await response.json()
            console.log(data)
            setAdvice(data.slip)
        } catch (error) {
            console.error("error:", error)
        }
    }

    useEffect(()=>{
        fetchAdvice()
    },[])
    
  return (
    <div className="card">
        <p>Advice #{advice?.id}</p>
        <h2>{advice?.advice}</h2>
        <img src={dividerDesktop} className="dividerDesktop" alt="" />
        <img src={dividerMobile} className="dividerMobile" alt="" />
        <div className="dice" onClick={fetchAdvice}>
            <img src={dice} alt="" />
        </div>
    </div>
  )
}

export default Advice
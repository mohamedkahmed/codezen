import { useState } from "react"
import "./stylebutton.scss"
import {BiArrowToTop} from 'react-icons/bi'
const Upbutton = () => {
    const [to_top , setto_top] = useState(false)
    window.onscroll = () => {
        if(window.scrollY > 200){
            setto_top(true)
        } else{
            setto_top(false)
        }
    }
    const topHandelar = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return (
       <button onClick={topHandelar} className={to_top ? "button_up active" : "button_up"}><BiArrowToTop /></button>
    )
}
export default Upbutton
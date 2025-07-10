import UniButton from "../components/Button"
import ButtonWrap from "../components/ButtonWrap"

function AboutUs() {
    const handleClick = () => {
        alert('Button clicked')
    }
    return (
        <div className="test">
            <UniButton label={"about"} onClick={handleClick}/>
            <ButtonWrap />
        </div>
        
        
    )
}




export default AboutUs

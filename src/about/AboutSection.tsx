
import './AboutSection.css'
import ProfessionalData from './ProfessionalData'

const aboutSection=()=>{
    return (
        <div className="container">
            <div className="row">
            <div className="about-col1">
                <img src="\Anshumanpic.jpg"/>
            </div>
            <div className="about-col2">
                <h1> About Me</h1>
                <p> Hi Guys, My name is Anshuman Pillai,
                     I'm from Delhi and I did my masters in Data Science, 
                     currently based out of Chennai and working in Microchip Technology India Private Limited
                </p>
                <ProfessionalData/>
            </div>
            </div>
        </div>
    )
}

export default aboutSection
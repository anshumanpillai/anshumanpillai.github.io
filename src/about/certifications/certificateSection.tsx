import "./certificateSection.css"

const certificateSection=()=>{
    return(
        <div className="container">
             <h1>Certifications</h1>
             <div className="certificate-list">
                <div className="certificates">
                    <img src="./AI_Analyst.png" onClick={()=>{return( <a href="https://www.youracclaim.com/badges/8e99703e-65cf-4c06-943e-1567f51f795b?source=linked_in_profile" target="_blank"/>)}}/>
                </div>
                <div className="certificates">
                    <img src="./BI.png" onClick={()=><a href="https://www.youracclaim.com/badges/b407913a-ac8e-4dca-8b56-562a4cd9112c/linked_in_profile" target="_blank"/>}/>
                </div>
             </div>
        </div>
    )
}

export default certificateSection
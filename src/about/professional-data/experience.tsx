interface Props{
    isVisible:boolean
}
const experience=(props:Props)=>{
    const experienceData=
    [
        {
                
            'duration':'2023-Current',
            'Company':'Microchip Technology',
            'Position':'Software Engineer 2',
        },
        {
                
            'duration':'2022-2023',
            'Company':'Microchip Technology',
            'Position':'Software Engineer Intern',
        },
    ]
    const experience=experienceData.map((exp)=>{
        const experienceDetails=exp.Position +' '+ 'at'+' '+ exp.Company
        if(props.isVisible){
            return(
                <ul className="skillList">
                   <li>
                       <span>{exp.duration}</span><br></br>
                       <span>{experienceDetails}</span>
                   </li>
               </ul>
            )
        }
    })

    return(
        <div className="tab-contents active-tab">
            {experience}
        </div>
    )
}

export default experience
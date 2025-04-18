interface Props{
    isVisible:boolean
}
const education=(props:Props)=>{
    const educationData=[
        {
            'qualification':'M.tech in Data Science',
            'Institution':'Amrita Vishwa Vidyapeetham Coimbatore',
            'Year':"2023"
        },
        {
            'qualification':'B.tech in Computer Science and Engineering',
            'Institution':'SRM University Sonepat',
            'Year':"2021"
        },
        {
            'qualification':'XII',
            'Institution':'Birla International School Ajmer',
            'Year':"2017"
        },
        {
            'qualification':'X',
            'Institution':'Birla International School Ajmer',
            'Year':"2015"
        },

    ]
    const education=educationData.map((edu)=>{
        const educationDetails=edu.qualification+' '+"from"+' '+edu.Institution
        if(props.isVisible)
            return(
                <ul className="skillList">
                    <li>
                        <span>{edu.Year}</span><br></br>
                        <span>{educationDetails}</span>
                    </li>
                </ul>
            )
        })

    return(
        <div className=" tab-contents active-tab">{education}</div>
    )
}

export default education
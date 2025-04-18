import"./skills.css"

interface Props{
    isVisible:boolean
}
const skills=(props:Props)=>{
    const skillSet=["React","Redux","TypeScript","Python","HTML","Machine Learning","CSS"]
    const skills=skillSet.map((skill)=>{
        if(props.isVisible)
            return(
                <ul className="skillList">
                    <li>{skill}</li>
                </ul>
            )
    })
    return(
        <div className='tab-contents active-tab'> {skills}</div>
    )
}

export default skills
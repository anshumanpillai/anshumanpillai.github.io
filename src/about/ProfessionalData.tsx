
import { useState } from "react"
import Education from "./professional-data/education"
import Experience from "./professional-data/experience"
import Skills from "./professional-data/skills"
import "./ProffessionalData.css"

const professionalData=()=>{
    const [skillSectionVisible,setSkillSectionVisible]=useState<boolean>(false)
    const [ExperienceSectionVisible,setExperienceSectionVisible]=useState<boolean>(false)
    const [EducationSectionVisible,setEducationSectionVisible]=useState<boolean>(false)

    const isSkillSectionVisible=()=>{
        setSkillSectionVisible(true);
        setExperienceSectionVisible(false);
        setEducationSectionVisible(false)
    }

    const isEducationSectionVisible=()=>{
        setSkillSectionVisible(false);
        setExperienceSectionVisible(false);
        setEducationSectionVisible(true)
    }

    const isExperienceSectionVisible=()=>{
        setSkillSectionVisible(false);
        setExperienceSectionVisible(true);
        setEducationSectionVisible(false)
    }

    return(
        <div>
            <div className=' tab-titles'>
                    <p className='tab-links' onClick={()=>isSkillSectionVisible()}>Skills</p>
                    <p className='tab-links' onClick={()=>isExperienceSectionVisible()}>Work Ex.</p>
                    <p className='tab-links' onClick={()=>isEducationSectionVisible()}>Education</p>
            </div>
            <Skills isVisible={skillSectionVisible}/>     
            <Experience isVisible={ExperienceSectionVisible}/>
            <Education isVisible={EducationSectionVisible}/>
        </div>
    )
}

export default professionalData
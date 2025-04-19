import "./webPageHeader.css"

const webPageHeader=()=>{
return(
    <div className=' container' >
        <nav>
            <img src="\newLogo.png" className='App-logo'/>
            <ul>
                <li><a href='#About'>About</a></li>
                <li><a href='#Projects'>Projects</a></li>
                <li><a href='#Certifications'>Certifications</a></li>
                <li><a href='#ContactMe'>Contact me</a></li>
            </ul>
       </nav>
    </div>
)
}

export default webPageHeader
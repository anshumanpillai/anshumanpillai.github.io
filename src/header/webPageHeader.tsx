import "./webPageHeader.css"

const webPageHeader=()=>{
return(
    <div className=' container'>
        <nav>
            <img src="\newLogo.png" className='App-logo'/>
            <ul>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Projects</a></li>
                <li><a href='#'>Certifications</a></li>
                <li><a href='#'>Contact me</a></li>
            </ul>
       </nav>
    </div>
)
}

export default webPageHeader
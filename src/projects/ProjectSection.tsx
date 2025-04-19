import "./ProjectSection.css"

const projectSection=()=>{
    return(
        <div className="container">
             <h1>Projects</h1>
             <div className="project-List">
                <div className="projects">
                    <div className="project">
                        <img src="\twiiter.jpg"></img>
                        <div className="layer">
                            <h3>Twitter Sentiment Analysis</h3>
                            <p>Developed a model to analyze the sentiment of the given tweet using Natural Language Processing
                                 and RegEx. With the help of different machine learning models,
                                  an accuracy score of 67 % was obtained.
                            </p>
                            <a href="https://github.com/anshumanpillai/Twitter-Sentiment-Analysis" target="_blank"> View</a>
                        </div>
                    </div>
                </div>
                <div className="projects">
                    <div className="project">
                        <img src="\loan-prediction.jpg"></img>
                        <div className="layer">
                            <h3>Loan-Prediction Project</h3>
                            <p>Using machine learning models (Decision Tree, Logistic Regression, XG Boost), 
                                predicted the number of people eligible for loan and obtained a final accuracy score of 72.22%
                            </p>
                            <a href="https://github.com/anshumanpillai/Loan-Prediction" target="_blank">View</a>
                        </div>
                    </div>
                </div>
                <div className="projects">
                    <div className="project">
                        <img src="\driver-detection.jpg"></img>
                        <div className="layer">
                            <h3>EEG-SIGNAL-BASED-EYE-STATE-CLASSIFICATION</h3>
                            <p>
                            Developed a machine learning model to enable Assisted driving by giving alerts, 
                            in case a driver falls asleep while driving.The model was developed, 
                            by using the EEG signals dataset, to predict the state of the eyes I.e whether they are open or closed
                            The dataset was trained on many machine learning models and obtained a final accuracy score of 92 %
                            </p>
                            <a href="https://github.com/anshumanpillai/EEG-SIGNAL-BASED-EYE-STATE-CLASSIFICATION" target="_blank"> View</a>
                        </div>
                    </div>
                </div>
             </div>
             <a target="_blank" href="https://github.com/anshumanpillai" className="otherProjects"> See More</a>
        </div>
    )
}

export default projectSection
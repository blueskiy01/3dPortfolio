import React from 'react'
import { arrow } from '../assets/icons'
import { Link } from 'react-router-dom'

const InfoBox = ({text,link,btnText}) => (
    <div className="info-box">
     {text}
     <Link to={link}>
        {btnText}
     </Link>
    </div>
)

const renderContent= {
    1 : (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Korin</span>
            👋
            <br />
            Full stack student at grit:lab Åland Islands
        </h1>
    ),

    2 : (
        <InfoBox
        text= "Worked with many companies and picked up many skills along the the way " 
        link= "/about"
        btnText= "Learn More"
        />

    ),

    3 : (
        <InfoBox
        text= "Led multiple projects to success over the years. Curious about the impact?" 
        link= "/projects"
        btnText= "Visit my portfolio"
        />
    ),
   4 : (
        <InfoBox
        text= "Need a project done or looking for a dev? I'm just a few keystrokes away" 
        link= "/contact"
        btnText= "Lets talk"
        />
    )
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null; 
}

export default HomeInfo
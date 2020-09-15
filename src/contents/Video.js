import React, { Component } from 'react';
import ReactPlayer from "react-player"

class Video extends Component {
render() {
    return (
        <div className="contentdiv video">
            <p>Voici différentes videos de  notre perroquet Auguste:</p>
            <ul>
            <ReactPlayer 
                className="video" 
                url="https://www.youtube.com/watch?v=xbDtw2bMq3k"
                controls='true'
            >
            </ReactPlayer>
            <ReactPlayer 
                className="video" 
                url="https://www.youtube.com/watch?v=AtK0O76xpfw"
                controls='true'
            >
            </ReactPlayer>
            <ReactPlayer 
                className="video" 
                url="https://www.youtube.com/watch?v=KsNJDszrsEA"
                controls='true'
            >
            </ReactPlayer>
            <ReactPlayer 
                className="video" 
                url="https://www.youtube.com/watch?v=PbZtGn24aQ8"
                controls='true'
            >
            </ReactPlayer>
            <ReactPlayer 
                className="video" 
                url="https://www.youtube.com/watch?v=eUw7C_r5Q4E"
                controls='true'
            >
            </ReactPlayer>
            <ReactPlayer 
                className="video" 
                url="https://www.youtube.com/watch?v=fmL10r4Fye0"
                controls='true'
            >
            </ReactPlayer>
            <ReactPlayer 
                className="video" 
                url="https://www.youtube.com/watch?v=35mFOLjFYvw"
                controls='true'
            >
            </ReactPlayer>
            </ul>
        </div>
        )
    }
}
    
export default Video
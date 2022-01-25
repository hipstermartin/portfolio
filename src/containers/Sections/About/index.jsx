import React from "react";
import Point from "../../../components/PointNode";
import Wrapper from "../../../components/SectionWrapper";
import languages from './languages';
import comprehensions from './compherensions';
import tools from './tools';

class About extends React.Component {
    render() {
        return (
            <Wrapper 
                light 
                height='100' 
                align="center"
                id="about"
            >
                <div>
                    <h5 className="dark-blue-text title">ABOUT ME</h5>
                    <h6 className="dark-blue-text" style={{padding: "10px"}}>
                        With a strong interest in application development, I am a technology enthusiast and learning developer. Looking for a opportunity to learn about new technologies and apply my knowledge to real-world problems. I have strong social and communication skills in addition to my programming abilities. In addition, I am a self-motivated individual who enjoys working as part of a team, making me an asset to any working group to which I am assigned.
                    </h6>
                    <div>
                        {languages.map((language) => 
                            <Point red>{language}</Point>
                        )}
                    </div>
                    <div>
                        {tools.map((tool) => 
                            <Point blue>{tool}</Point>
                        )}
                    </div>
                    <div>
                        {comprehensions.map((compherension) => 
                            <Point red>{compherension}</Point>
                        )}
                    </div>
                </div>
            </Wrapper>
        );
    }  
}

export default About;

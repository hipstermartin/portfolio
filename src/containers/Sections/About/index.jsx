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
                    <h6 className="dark-blue-text" style={{marginTop:20, marginBottom:40}}>
                        A technology enthusiast and learning developer attempting to solve real-world problems through the development of basic applications.
                        <br></br>
                        <br></br>
                        In addition to my programming abilities, I have sturdy social and communication skills. Furthermore, I am a motivated individual who adores working in a team, making me an asset to any working team I am assigned to.
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

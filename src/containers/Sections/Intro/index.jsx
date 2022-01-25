import Button from "../../../components/Button";
import React from "react";
import Typing from 'react-typing-animation';
import Wrapper from "../../../components/SectionWrapper";

class Intro extends React.Component {    
    render() {
        return (
            <Wrapper 
                dark 
                height="100"
                align="center"
                style={{ marginTop: -20 }} 
                id="intro"
            >
                <div>
                    <h5 className="white-text title">HELLO, I AM</h5>
                    {this.props.loading || 
                        <Typing hideCursor={true}> 
                            <Typing.Speed ms={10} />
                            <h1 className="light-blue-text mainTitle" style={{ marginBottom: 30, marginTop: 20, fontWeight:"bolder" }}>
                                Abhinav Yalamaddi
                            </h1>
                        </Typing>
                        }
                    <div style={{ marginTop: 30, marginBottom:100 }}>
                        <Button 
                            dark
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={1000}
                        >
                            <span className="bold light-blue-text">EXPLORE</span>    
                        </Button>
                        <Button 
                            light
                            external
                            href="https://drive.google.com/file/d/1AflUOisangiO1KVLcKK5mdkb-6hfRx15/view?usp=sharing"
                        >
                            <span className="bold dark-blue-text">RESUME</span>
                        </Button>                    
                    </div>
                </div>
            </Wrapper>
        );
    }  
}

export default Intro;

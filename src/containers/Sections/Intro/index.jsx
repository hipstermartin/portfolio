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
                    <h6 className="white-text">
                        A motivated designer and developer seeking a challenging opportunity, that can help to enhance my skill set. <br></br>
                        Currently a Computer Science undergraduate student at the VIT-AP University.
                    </h6>
                    <div style={{ marginTop: 30, marginBottom:100 }}>
                        <Button 
                            dark
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={1000}
                        >
                            <span className="bold light-blue-text">EXPLORE ME</span>    
                        </Button>
                        <Button 
                            light
                            external
                            href="https://docs.google.com/document/d/12mBx3WZBxOy_pTDiPrUUwL5D1Ef_K_xvibPoLEV-QV4/edit?usp=sharing"
                        >
                            <span className="bold dark-blue-text">SEE RESUME</span>
                        </Button>                    
                    </div>
                </div>
            </Wrapper>
        );
    }  
}

export default Intro;
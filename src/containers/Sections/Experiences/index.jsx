import React from "react";
import Wrapper from "../../../components/SectionWrapper";
import Accordion from "../../../components/Accordion";

class Experiences extends React.Component {
    render() {
        return (
            <Wrapper 
                dark 
                height="100" 
                align="center"
                id="experiences"
            >
                <div>
                    <div>
                        <h5 className="white-text title">PROFESSIONAL EXPERIENCES</h5>
                    </div>
                    <div>
                        <Accordion/>
                    </div>
                </div>
            </Wrapper>
        );
    }  
}

export default Experiences;

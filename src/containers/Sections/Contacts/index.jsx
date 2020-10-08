import React from "react";
import Wrapper from "../../../components/SectionWrapper";

import emailLogo from "../../../icons/emailLogo.svg";
import linkedinLogo from "../../../icons/linkedin.svg";
import phoneLogo from "../../../icons/phoneLogo.svg";

class Contacts extends React.Component {
    render() {
        return (
            <Wrapper
                light
                height="50"
                id="contacts"
                align="center"
            >
                <div style={{ wordWrap: 'break-word', whiteSpace: "initial" }}>
                    <h4 className="dark-blue-text">LET'S GET IN TOUCH WITH ME!</h4>
                    <h3 className="dark-blue-text" style={{marginTop:20, marginBottom:20}}>
                            Abhinav Yalamaddi
                    </h3>
                    <div className="line-wrapped">
                        <a href="https://www.linkedin.com/in/abhinav-yalamaddi-6b3036182/">
                            <img
                                src={linkedinLogo}
                                alt="LinkedIn"
                                style={{ width: 25, marginRight: 5, marginLeft: 5 }}
                            />
                        </a>
                        <a href="mailto: abhi.yalamaddi@gmail.com">
                            <img
                                src={emailLogo}
                                alt="Email"
                                style={{ width: 25, marginRight: 5, marginLeft: 5 }}
                            />
                        </a>
                        <a href="tel:+919182364034">
                            <img
                                src={phoneLogo}
                                alt="Phone"
                                style={{ width: 25, marginRight: 5, marginLeft: 5 }}
                            />
                        </a>
                    </div>
                </div>
            </Wrapper>
        );
    }
}

export default Contacts;
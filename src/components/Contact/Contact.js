import React, { useState } from "react";
import { ContactWrapper, ContactInfo, Info} from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';

import ScrollAnimation from "react-animate-on-scroll";
function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [linkedInCopied, setLinkedInCopied] = useState(false);
  const [githubCopied, setGithubCopied] = useState(false);
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("shinichikawabc@gmail.com");
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 700);
  };
  const copyLinkedInToClipboard = () => {
    navigator.clipboard.writeText("https://www.linkedin.com/in/shinichi-ishikawa-a38735197/");
    setLinkedInCopied(true);
    setTimeout(() => {
      setLinkedInCopied(false);
    }, 700);
  };
  const copyGithubToClipboard = () => {
    navigator.clipboard.writeText("https://github.com/shinichikawabc");
    setGithubCopied(true);
    setTimeout(() => {
      setGithubCopied(false);
    }, 700);
  };

  return (
    <ContactWrapper id="contact">

      <div className="Container">
        <div className="SectionTitle">Contact Me</div>
        <ScrollAnimation animateIn="fadeIn" >
          <div className="Card">
            <ContactInfo>
              <Info >
                <span>Email</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={emailCopied}
                  onClose={() => setEmailCopied(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton  onClick={copyEmailToClipboard} >
                    <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#151418" }}/>
                  </IconButton>
                </Tooltip>
              </Info>

              <Info >
                <span>LinedIn</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={emailCopied}
                  onClose={() => setLinkedInCopied(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton  onClick={copyLinkedInToClipboard} >
                    <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#151418" }}/>
                  </IconButton>
                </Tooltip>
              </Info>

              <Info >
                <span>Github</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={emailCopied}
                  onClose={() => setGithubCopied(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton  onClick={copyGithubToClipboard} >
                    <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#151418" }}/>
                  </IconButton>
                </Tooltip>
              </Info>
             
            </ContactInfo>
          </div>
        </ScrollAnimation>

      </div>
    </ContactWrapper>
  );
}

export default Contact;

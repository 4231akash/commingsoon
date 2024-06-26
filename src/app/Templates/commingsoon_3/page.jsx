"use client";

import React, { useState, useEffect } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
// import Image from "next/image";
import Countdown from "./component/countdown.jsx";
import "./global.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
// import SnackbarContent from "@mui/material/SnackbarContent";
import  {facebook,github,insta,twitter} from '/src/app/constant/url';
import Notify from "/src/app/component/contact";



// import MyComponent from "./contact/mycomponent.jsx";

import datas, {
  english,
  japneese,
  chinese,
  french,
  spanish,
} from "/src/app/constant/language.jsx";

import { Alert, Link, Snackbar } from "@mui/material";

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [lang, setLang] = useState("english");
  const [exist, setexist] = useState(true);
  const [fromemail, setFromemail] = useState('');
  const [inputValue, setInputValue] = useState('');
  

  // var exist= true;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClick = () => {
    setOpens(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const changmode = () => {
    if (exist == false) {
      setexist(true);
      console.log(exist);
    } else {
      setexist(false);
      console.log(exist);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 3000,
      delay: 100,
    });
  }, []);

  var language = datas.english;

  if (lang == "japneese") {
    language = datas.japneese;
  }
  if (lang == "french") {
    language = datas.french;
    // if(lang == 'french' ){
    //   setexist(false);
    // }
  }
  if (lang == "chinese") {
    language = datas.chinese;
  }
  if (lang == "spanish") {
    language = datas.spanish;
  }

  

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setFromemail(event.target.value);

    console.log("value "+ inputValue);
  };
  // if(lang =='english'){
  //   language=datas.english;
  // }

  // var one=language.title.charAt(0) < language.title.charAt(4) ;
  const handleLanguageChange = (event) => {
    setLang(event.target.value);
  };

  const targetDate = "2024-07-30T00:00:00";

  return (
    <React.Fragment>
      <main className="container">
        <div className="lan">
          <div className="ico">
            <AiOutlineGlobal className="global" onClick={changmode} />

            <TiArrowSortedDown className="global" onClick={changmode} />
          </div>
          {exist == true ? (
            <div className="ico"></div>
          ) : (
            <select
              className="custom-select"
              onChange={handleLanguageChange}
              value={lang}
            >
              <option className="custom-selects" value="english">
                English
              </option>
              <option className="custom-selects" value="japneese">
                Japanese
              </option>
              <option className="custom-selects" value="chinese">
                Chinese
              </option>
              <option className="custom-selects" value="spanish">
                Spanish
              </option>
              <option className="custom-selects" value="french">
                French
              </option>
            </select>
          )}
        </div>

        <video autoPlay muted loop data-aos="zoom-out">
          <source src={"/video_3.mp4"} type="video/mp4" />
        </video>

        <IntlProvider messages={language} locale="en" defaultLocale="en">
          <div data-aos="slide-up">
            <div data-aos="fade-right">
               {/* <img src="/public/heartbeat.png" className='heart'  alt="hi" /> */}
              <h1 className="great-vibes-regular title">
                <FormattedMessage id={language.title} />

                <br />
              </h1>
            </div>

            <div className="count" data-aos="fade-left">
              <Countdown targetDate={targetDate} lang={lang} />
            </div>

            <div className="launch">
              <h2 className="great-vibes-regular" data-aos="fade-right">
                <FormattedMessage id={language.reload} />
                {/* We are{" "}
                <span className="reload one great-vibes-regular">launching</span>{" "}
                soon please reload{" "}
                <span className="reload one great-vibes-regular">after</span> days */}
              </h2>
            </div>

            <div className="input_field">
              <Button
                className="btn"
                variant="outlined"
                data-aos="fade-left"
                onClick={handleClickOpen}
              >
                <FormattedMessage id={language.notify} />
                {/* Notify me */}
              </Button>
            </div>

            <div className="days" data-aos="fade-right">
              <Link href={insta} target="_blank" rel="noopener noreferrer"><FaInstagram className="dayss" /></Link>
              <Link href={twitter} target="_blank" rel="noopener noreferrer"> <FaTwitter className="dayss"  /></Link>
              <Link href={github} target="_blank" rel="noopener noreferrer"><FaGithub className="dayss" /></Link>
              <Link href={facebook} target="_blank" rel="noopener noreferrer"><ImFacebook2 className="dayss"/></Link>
              

              
              
            </div>

        
     
          </div>
        </IntlProvider>
      </main>

      {/* <div className="wave">
        <div className="butterfly">
          <div className="wings">
            <div className="fly"></div>
            <div className="fly"></div>
          </div>
          <div className="wings">
            <div className="fly"></div>
            <div className="fly"></div>
          </div>
        </div>
      </div> */}
         <Notify
        open={open}
        click={handleClose}
        handleclick={handleClick}
        inputchange={handleInputChange}
        subscribe={language.subscribe}
        notify={language.notify}
        subnote={language.subscribeNote}
        email={language.email}

      />
        
    </React.Fragment>
  );
}

import inquiry from "./images/iconamoon_information-circle-light.svg";
import telegram from "./images/uit_telegram-alt.svg";
import whatsapp from "./images/ph_whatsapp-logo-light.svg";
import book_call from "./images/ci_chat-conversation.svg";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Connect = () => {
    const screen = window.screen.availWidth
    useEffect(()=>{
        window.addEventListener('scroll',toggleinquiry)
        return () => {
          window.removeEventListener("scroll", toggleinquiry);
        };
    })

    function toggleinquiry(){
        const element = document.getElementsByClassName('connect_me')[0]
        if(screen > 500){
            element.style.right = '-150px'
            setTimeout(() => {
                window.removeEventListener("scroll", toggleinquiry);
            }, 5000);
        }

    }
  return (
    <div className="connect_me">
      <NavLink className='enquiry'>
        <img src={inquiry} alt="" /> <span>Enquiry</span>
      </NavLink>
      <a href="" className="telegram">
        {" "}
        <img src={telegram} alt="" /> <span>Telegram</span>
      </a>
      <a href="" className="whatsapp">
        <img src={whatsapp} alt="" /> <span>Whatsapp</span>
      </a>
      <NavLink className='book_call'>
        <img src={book_call} alt="" /> <span> Book a Call</span>
      </NavLink>
    </div>
  );
};

export default Connect;

import { useEffect } from "react";
import logo from '../logo.svg';

function LoadingScreen(props) { 

  useEffect(() => {
    const circle = document.getElementById('circle-halo');
    const count = document.getElementById('count');
    let interval = 30;
    let angle = 0;
    let angle_increment = 4;

    return () => {
        window.timer = window.setInterval(function() {
            circle.setAttribute("stroke-dasharray", angle + ", 20000");
            count.innerHTML = parseInt((angle / 360 * 100)+44) + '%';
            if (angle >= 200) {
              window.clearInterval(window.timer);
              props.Loading(false);
            }
            angle += angle_increment;
          }, interval,
          );
        }
  });

  return (
          <div className="loading-screen">
            <div className="overlay-bg"></div>
              <svg viewBox="0 0 110 100" style={{ width: "300", height: "300"}}>

                <linearGradient id="loading-gradient" x1="0" y1="0" x2="0" y2="100%">
                  <stop offset="0%" stopColor="#fdfc47" />
                  <stop offset="100%" stopColor="#24fe41" />
                </linearGradient>
                <path 
                id="circle-halo" 
                strokeLinecap= "round" 
                strokeWidth="2" 
                stroke="url(#loading-gradient)"  d="M30,90 A40,40 0 1,1 80,90" fill='none' />

                <text id="count" textAnchor="middle" x="50%" y="90%" style={{ fontSize: "10px" }} >0%</text>
              </svg>              
                
              <img 
                src={logo}
                width="150px"
                height="150px"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                />
          </div>
          )
}

export default LoadingScreen;


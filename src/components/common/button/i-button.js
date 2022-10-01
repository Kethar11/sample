import { useState, useEffect, createRef } from "react";
import Nav from 'react-bootstrap/Nav';

export const HoverButtons = (props) => {
    const title= props.Title;
    const arrLength = title.length;
    const [inputRef, setInputRef] = useState([]);

    useEffect(() => {
        setInputRef((inputRef) =>
          Array(arrLength)
            .fill()
            .map((_, i) => inputRef[i] || createRef()),
        );
      }, [arrLength]);
    
    const hoverFunction = (e, eventindex, addclass, removeclass)=> {        
        let circle = document.querySelectorAll('.su_button_circle');

        circle.forEach((item,i) =>{        
            const { offsetLeft, offsetTop } =  inputRef[i].current;
            let relX = e.pageX - offsetLeft;
            let relY = e.pageY -  offsetTop;
                if(eventindex === i){
                    item.style.left = relX+'px';
                    item.style.top = relY+'px';
                    item.classList.remove(removeclass);
                    item.classList.add(addclass);
                }
        });
    }


    return(
        <div className="ms-auto button_container">
            {title.map((text,i) => 
                <div ref={inputRef[i]}  className="button_su">
                    <span className="su_button_circle">
                    </span>
                    <Nav
                     className="button_su_inner"
                     onMouseEnter={(e)=>{hoverFunction (e, i, "explode-circle", "desplode-circle")}}
                     onMouseLeave={(e)=>{hoverFunction (e, i, "desplode-circle", "explode-circle")}}
                     >
                    <Nav.Link className="button_text_container">{text}</Nav.Link>
                    </Nav>
                </div>
            )}
        </div>
    )
}
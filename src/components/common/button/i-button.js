import { useState, useEffect, createRef } from "react";
import Nav from 'react-bootstrap/Nav';
import { useLocation } from "react-router-dom";
import { handleScroll } from "../../../utils";

export const HoverButtons = (props) => {
    const title = props.Title;
    const arrLength = title.length;
    const [inputRef, setInputRef] = useState([]);
    const location = useLocation();

    useEffect(() => {
        setInputRef((inputRef) =>
            Array(arrLength)
                .fill()
                .map((_, i) => inputRef[i] || createRef()),
        );
    }, [arrLength]);

    const hoverFunction = (e, eventindex, addclass, removeclass) => {
        let circle = document.querySelectorAll('.su_button_circle');

        circle.forEach((item, i) => {
            const { offsetLeft, offsetTop } = inputRef[i].current;
            let relX = e.pageX - offsetLeft;
            let relY = e.pageY - offsetTop;
            if (eventindex === i) {
                item.style.left = relX + 'px';
                item.style.top = relY + 'px';
                item.classList.remove(removeclass);
                item.classList.add(addclass);
            }
        });
    }

    const headerButton = (button) => {

        if (button !== "contact") {
            props.navigate(`/${button}`)
        }
        else if (button === "contact") {
            // scroll upto bottom 
            handleScroll(props.contactRef.current);
        }
        else {
    props.navigate(`home`);
}
    }
return (
    <div className="ms-auto button_container" >
        {title.map((text, i) =>
            <div ref={inputRef[i]} className="button_su">
                <span className="su_button_circle">
                </span>
                <Nav
                    onClick={() => { headerButton(text.route) }}
                    className="button_su_inner"
                    onMouseEnter={(e) => { hoverFunction(e, i, "explode-circle", "desplode-circle") }}
                    onMouseLeave={(e) => { hoverFunction(e, i, "desplode-circle", "explode-circle") }}
                >
                    <Nav.Link className="button_text_container">{text.name}</Nav.Link>
                </Nav>
            </div>
        )}
    </div>
)
}
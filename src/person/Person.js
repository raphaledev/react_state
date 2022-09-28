import React from "react";
import { useState, useEffect } from "react";
import "./Person.css"


function Person(props){
    const {fullName, bio, profession} = props;
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
        setCount(prevCount => prevCount +1/2);
        }, 1000);
    }, []);

    const handleClick = event => {
        setShow(current => !current);
    }
    return (
        <div className="person">
            <div className={show ? 'img--none' : ''}>
            <div>
                <h3>Full Name</h3>
                <p>{fullName}</p>
            </div>
            <hr/>
            <div> 
                <h3>Profession</h3>
                <p>{profession}</p>
            </div>
            <hr/>
            <div>
            <img src="https://picsum.photos/seed/picsum/400/300"/>
            </div>
            <div>
                <h3>Bio</h3>
                <p>{bio}</p>
            </div>
            <hr/>
            </div>
            <div>
                <button onClick={handleClick}>{show ? 'Show Profile' : 'Hide Profile'}
                </button>
            </div>
            <h3>Component mounted for {count} seconds</h3>;
        </div>
    )
}

Person.defaultProps = {
    fullName: "Raphael Amath Soucka Faye",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper velit ac ipsum pharetra consequat. Nulla quis sem lectus. Nulla semper mi et orci maximus, sed ornare elit imperdiet.",
    profession: "Student in Javascript Full Stack Development"
};

export default Person
import React, { Component } from "react";

const AvatarList = (props) => {
    return (
        <div className= "avatarStyle ma4 bg-light-purple dib pa2 tc grow shadow-4">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar" />
            <h1 className=""> { props.name } </h1>
            <p> { props.work } </p>
        </div>
    )
}

export default AvatarList;

// React are default Component & AvatarList are custom Component
// Line 6: destructuring of data, remember alaways.

//Notes: FOR PROPS
// props get passed to the component.
// props are immutable (cannot be change/modify)
// props - functional components.
// this.pros - class components.
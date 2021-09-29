import React, { Component } from "react";
import "./Avatar.css";
import "tachyons";
import AvatarList from "./AvatarList";

class Avatar extends Component {
    
    constructor(){
        super();
        this.state = {  // this.state - class Component
            name: "Welcome to Avatar World"
        }
    }

    nameChange(){
        this.setState({
            name: "Welcome to React JS"
        })
    }
    
    render() {

        const avatarListArray = [
            {
                id:"1",
                name:"Tom Jerry",
                work: "Cartoon Character"
            },
            {
                id:"2",
                name:"Ben Guen",
                work: "Action Character"
            },
            {
                id:"3",
                name:"Mickey Mouse",
                work: "Cartoon Character"
            },
            {
                id:"4",
                name:"Shaktiman",
                work: "Durdarshan Character"
            },
        ]

        const arrayAvatarCard = avatarListArray.map((avatarCard, index) => {
            return <AvatarList key={index} id={avatarListArray[index].id} name={avatarListArray[index].name} work={avatarListArray[index].work} />
    
        });

        return (
            <div className="mainpage">
                <h1> {this.state.name} </h1>
                {arrayAvatarCard}
                <button onClick= { () => this.nameChange() } >ClickMe</button>
            </div>
        );
    }
}

export default Avatar;


// Below to above, same thing is transfered from function base component to class base component

// const Avatar = (props) => {
// //Array Of objects
//     const avatarListArray = [
//         {
//             id:"1",
//             name:"Tom Jerry",
//             work: "Cartoon Character"
//         },
//         {
//             id:"2",
//             name:"Ben Guen",
//             work: "Action Character"
//         },
//         {
//             id:"3",
//             name:"Mickey Mouse",
//             work: "Cartoon Character"
//         },
//         {
//             id:"4",
//             name:"Shaktiman",
//             work: "Durdarshan Character"
//         },
//     ]

// //syntax of map
// //map(callback(currentvalue, index, array)argument)

//     const arrayAvatarCard = avatarListArray.map((avatarCard, index) => {
//         return <AvatarList id={avatarListArray[index].id} name={avatarListArray[index].name} work={avatarListArray[index].work} />

//     });

//     return (
//         <div className="mainpage">
//             <h1>Welcome to Avatar World</h1>
//             {arrayAvatarCard}
//             {/* <AvatarList id={avatarListArray[0].id} name={avatarListArray[0].name} work={avatarListArray[0].work} />
//             <AvatarList id={avatarListArray[1].id} name={avatarListArray[1].name} work={avatarListArray[1].work} />
//             <AvatarList id={avatarListArray[2].id} name={avatarListArray[2].name} work={avatarListArray[2].work} />
//             <AvatarList id={avatarListArray[3].id} name={avatarListArray[3].name} work={avatarListArray[3].work} /> */}
//             <button>ClickMe</button>
//         </div>
//     );
// }

//Notes: For STATE
// state.is managed within the Component.
// state can be changed.
// useState hook - functional Component.
// this.state - class Component

//not sure below - search and find later
//we can only use states in class components


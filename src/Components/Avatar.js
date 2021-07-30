import React from 'react'

export default function Avatar(props) {

    return (
        <>
            <img className="avatar" src={props.avatar} alt="user image" />
            <h2>{props.name}</h2>
            <a className="logout"
                href={`http://localhost:5000/logout`}
            >Logout</a>
        </>
    )
}

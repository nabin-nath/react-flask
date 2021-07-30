import React from 'react'

export default function RepoCard(props) {

    return (
        <div className='card'>
            <span><b>Name: </b>{props.name}</span> <hr></hr>
            {props.language !== null ? <span><b>Language: </b>{props.language}</span> : <span><b>Language: </b>null</span>}

        </div>
    )
}

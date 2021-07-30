import React, { useEffect, useState } from 'react'
import Avatar from './Avatar'
import Repo from './Repo'
import { useHistory } from 'react-router-dom'

export default function Home() {

    const [userData, setUserData] = useState([])
    const [datafetched, setDataFetched] = useState(false)
    const [username, setUsername] = useState('')
    const [loggedIn, setLoggedIn] = useState(false);

    let history = useHistory();

    function fetchUserData(name) {

        fetch(`https://api.github.com/users/${name}`)
            .then(res => res.json())
            .then(data => {
                setUserData(data)
                console.log(data)
            })

    }


    useEffect(() => {
        fetch('/api')
            .then(res => res.json())
            .then((data) => {
                // console.log(data.username)
                if (data.username === null) {
                    history.push("/");
                }
                setUsername(data.username)
                setLoggedIn(true)
                fetchUserData(data.username)
            }).then(() => setDataFetched(true));
    }, [])

    return (
        <div className="center">
            {datafetched === false ? <h1>Loading User Data...</h1> :
                <>
                    <Avatar avatar={userData.avatar_url} name={userData.name} />
                    <Repo username={username} />
                </>
            }
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import RepoCard from './RepoCard'

export default function Repo(props) {

    const [repoData, setRepoData] = useState([])
    const [datafetched, setDataFetched] = useState(false)

    useEffect(() => {
        fetch(`https://api.github.com/users/${props.username}/repos`)
            .then(res => res.json())
            .then(data => {
                setRepoData(data)
                setDataFetched(true)
            })
    }, [])


    return (
        <div className="center-cards">
            {datafetched === true ? repoData.map((data, index) => <RepoCard key={index} name={data.name} language={data.language} />) : null}
        </div>
    )
}

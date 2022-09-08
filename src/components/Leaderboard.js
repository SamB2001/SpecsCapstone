import "./Leaderboard.css"
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Leaderboard() {

    const [score, setScore] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:7001/rank")
        .then((res) => {
            setScore(res.data[0]);
        });
    }, [])


  return (
    <div className="leaderboard">
        <h1 className='leaderboard__1'>Leaderboard</h1>
        <div className='scoreboard'>
            {score.map((newScore) => {
                return (
                    <h4 className='list' key={newScore.id} >Score: {newScore.score}</h4>
                )
            })}
        </div>
        <div className="duration">
        </div>
    </div>
  )
}



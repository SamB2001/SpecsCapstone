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



// function between(data, between){
//     const today = new Date();
//     const previous = new Date(today);
//     previous.setDate(previous.getDate() - (between + 1));

//     let filter = data.filter(val => {
//         let userDate = new Date(val.dt);
//         if (between == 0) return val;
//         return previous <= userDate && today >= userDate;
//     })

    // sort with asending order
    // return filter.sort((a, b) => {
    //     if ( a.score === b.score){
    //         return b.score - a.score;
    //     } else{
    //         return b.score - a.score;
    //     }
    // })




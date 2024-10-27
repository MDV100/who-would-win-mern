import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import { useState, useEffect } from "react"
import './CharacterCard.css'
import axios from './axios'

const CharacterCard = () =>
{
    const getCharacter = () => (
        axios.get('test/cards')
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    )



    const[characters, setCharacters] = useState([])
    useEffect(() => {
        async function fetchData() {
            const req = getCharacter()
            setCharacters(req.data)
        }
        fetchData()
    }, [])

    

    let characterArray = [
        ['Iron Man', "https://upload.wikimedia.org/wikipedia/en/a/a4/Iron_Man_at_San_Dieg_ComicCon.jpg"]
    ]

    // TODO: fetch data properly
    return(
        <div className="characterCards">
            <div className="characterCards_container">

                    <Card>
                        <div style={{backgroundImage: `url(${characterArray[0][1]})`}} className="card">
                            <h3>{characterArray[0][0]}</h3>
                            
                        </div>

                    </Card>

            
            
            
        </div>
        </div>


    )

}

export default CharacterCard

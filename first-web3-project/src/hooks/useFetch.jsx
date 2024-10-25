import { useEffect, useState } from 'react'

const API_KEY = import.meta.env.VITE_GIPHY_API;

const useFetch = () => {
    const [useGif , setUseGif] = useState("");

    const fetchGifs = async () => {
        try{
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`)
        } catch(error){

        }
    }
}
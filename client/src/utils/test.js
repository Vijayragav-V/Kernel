import axios from "axios";

const data = await axios.get(`http://www.omdbapi.com/?apikey=49f6b89b&s=starwars`);

if (data){
    console.log(`Here`);
}
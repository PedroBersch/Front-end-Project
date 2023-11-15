const apiKey = "76705089";
const url = `http://www.omdbapi.com/?apikey=${apiKey}`;

async function getMovieByTitle(title){
    const response = await fetch(`${url}&t=${title}`)
    const data = response.json();
    console.log(data)
}
getMovieByTitle('Matrix')
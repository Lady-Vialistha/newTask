// error handling dalam fetch
fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=avengers").then((res) => {
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res.json();
});

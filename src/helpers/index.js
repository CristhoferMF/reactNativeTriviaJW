const copyJson = (json) => {
    return JSON.parse(JSON.stringify(json))
}
const fetchWithTimeout = function (url, options = {}, timeout = 15000) {
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('timeout')), timeout)
        )
    ]);
}
const formatTime = (datetime) => {

    const date = new Date(datetime);
    const arrMeses = ["Ene", "Feb","Mar", "Abr", "May", "Jun",
    "Jul", "Ago","Sep", "Oct", "Nov", "Dic"]
    return `${new String("0"+date.getDate()).substr(-2)}/${arrMeses[date.getMonth()]}/${date.getFullYear()} ${date.getUTCHours()}:${date.getMinutes()}`
}
const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
export {copyJson,fetchWithTimeout,formatTime,shuffle}
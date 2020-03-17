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
export {copyJson,fetchWithTimeout,formatTime}
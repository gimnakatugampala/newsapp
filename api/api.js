export const getName = async (lat,lng) =>{
    const res = await fetch(`https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?location=${lat}%2C${lng}&language=en`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "trueway-geocoding.p.rapidapi.com",
            "x-rapidapi-key": "2af9a37521msh73b42cf0567a240p12d907jsne154ae89b3f5"
        }
    })

    return res.json()

}
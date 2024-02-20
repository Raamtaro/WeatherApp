const grabThat = (jsonResponse) => {
    return {
        locationName: jsonResponse.location.name,
        locationRegion: jsonResponse.location.region,
        locationTime: jsonResponse.location.localtime,
        locationTempC: jsonResponse.current.temp_c,
        locationTempF: jsonResponse.current.temp_f,
        locationFeelsLikeC: jsonResponse.current.feelslike_c,
        locationFeelsLikeF: jsonResponse.current.feelslike_f,
        locationCondition: jsonResponse.current.condition.text
    }

}

export default grabThat
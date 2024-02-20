import grabThat from "./grabInfo";

const getForecast = async (secret, location) => {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${secret}&q=${location}`)
        const result = await response.json();
        console.log("Success:", result);
        const displayData = grabThat(result);
        console.log(displayData)
    } catch(error) {
        console.error("Error retrieving data:", error)
    } finally {
        console.log("Request has finished processing")
    }
}

export default getForecast
# WeatherApp
Weather App capstone for TOP, Asynchronous coding practice




Understand:

- Need to be able to retrieve JSON information about the weather 
- Parse information received from the fetch request
- display those results
- Give user option to submit a Location

- Loading icon for pending request



Focusing on points one and two....

Write a module called apiRequest.js:

async function(location) {
    await fetch(`url${apiKey})
}

displaying the data on the website:

domItUp.js -->
const display = (information) => {

    <!-- probably have to create nodes for each type of information that's being returned from grabThat() (which is from the grabInfo.js module) -->

    <!-- Pretty much add the nodes to the body? We shall see -->


}
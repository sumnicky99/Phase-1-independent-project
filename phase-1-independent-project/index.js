let btn = document.getElementById("search").addEventListener("click", function(e) 
{
e.preventDefault()
fetch("http://api.citybik.es/v2/networks")
.then(response => 
{
if (!response.ok) {
throw new Error("Failed to fetch data from the API");
}
})
.then(data => {
// Process and display data
console.log(data)
displayData(data);
})
.catch(error => {
console.error(error);
});
});
function displayData(data) {
const resultDiv = document.getElementById("search-result");
//resultDiv.innerHTML = ""; // Clear previous results

// Iterate over the networks and display information
data.networks.forEach(network => {
const networkDiv = document.createElement("div");
networkDiv.textContent = network.name;
resultDiv.appendChild(networkDiv);
});
}
console.log(displayData)
console.log(btn)
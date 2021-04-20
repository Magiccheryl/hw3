// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  // Create a well-named variable for each data point in the Object:

  // Set Pickup Location to the Address, City, State, and Zip
  let pickupLocation = `${ride.pickupLocation.address}, ${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}`

  // Set Passenger name to First Name and Last Name
  let passengerName = `${ride.passengerDetails.first} ${ride.passengerDetails.last}`
  let phoneNumber = ride.passengerDetails.phoneNumber

  // Set Dropoff Locaton to Address, City, State, and Zip
  let dropoffLocation = `${ride.dropoffLocation.address}, ${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}`

  // Set "Purple" as a level of servie and store in memory
  let purpleRequested = ride.purpleRequested

  // Set the number of passengers and store in memory
  let numberOfPassengers = ride.numberOfPassengers



  // Conditional logic  
  // If the rider has requested the luxury "Purple" level of service (it doesn't matter the number of passengers)
  if (purpleRequested == true) {

  // Display "Noober Purple" as the level of service.
  console.log(`Noober Purple Passenger:`) 
} else if (purpleRequested == false && numberOfPassengers > 3) { 

  // If the numberOfPassengers in a single ride request is greater than 3, we'll need to upgrade to a larger car.
  console.log(`Noober XL Passenger:`) // Display "Noober XL" as the level of service.
} else {
  console.log(`Noober X Passenger:`) // Anything else is the normal level of service
}

  // Present it in human-readable format
  console.log(`${passengerName} - ${phoneNumber}. Pickup at 
${pickupLocation}. Drop-off at ${dropoffLocation}.`)

  // 🔥 YOUR CODE ENDS HERE 🔥
})

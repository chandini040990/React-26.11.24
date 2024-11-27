// we need to create the function to push the city if the city present in the given array we should not push
//if it is not present then we need push

const App = () => {
 
  const cities = ["hyd", "chennai", "bangalore"];

  const addCity = (city) => {
    if(!cities.includes(city)){
        cities.push(city);
        console.log(cities)
    } else {
      console.log(`${city} is already present`)
    }
  }


  return(
    <>
    <div>
    <h1>Cities</h1>
    <ul>
      {cities.map((city) => (
        <li>{city}</li>
      ))}
    </ul>
    <button onClick = {() => addCity("chennai")}>Add chennai</button>
    <button onClick = {() => addCity("goa")}>Add Goa</button>


    </div>
   

    
    
    
    </>
  )

} 

export default App

// when i click an item, it should add




// indexOf method in javascript: used to find the index of the first occurances of the specified value is an array.

// find the index of an item in the list 

const App = () => {

const mobiles = ["lg", "oppo", "vivo", "iphone"];

const sliceMobiles = mobiles.slice(1); //extract the mobiles from index 1 to 3(exclusive)


  return (
    <div>
      <p>origianl list: {mobiles.join(", ")}</p>
      <p>Sliced list: {sliceMobiles.join(",  ")}</p>
    </div>
  )
  
}

export default App

// slice and splice

// slice create the copy of the portion of an array without modifying the original array and
//it will returns the new array that contains the extracted portion


// indexOf method in javascript: used to find the index of the first occurances of the specified value is an array.

// find the index of an item in the list 

const App = () => {

const mobiles = ["lg", "oppo", "vivo", "iphone", "BPL", "MI", "shark"];

// mobiles.splice(2, 0, "samsung"); //extract the mobiles from index 1 to 3(exclusive)

mobiles.splice(4); 

  return (
    <div>
      <p>Spliced list: {mobiles.join(", ")}</p>
    </div>
  )
  
}

export default App

// slice and splice

// slice create the copy of the portion of an array without modifying the original array and
//it will returns the new array that contains the extracted portion



// splice changes the contents of an array by removing or replacing the existing elements or addeing the new ones

//parameters

//start: the index at which to start changing the array.

//deleteCount(optinal): the number of elements to remove

//item1, item2, ......(Optional) the items to be added to the array 


// indexOf method in javascript: used to find the index of the first occurances of the specified value is an array.

// find the index of an item in the list 

const App = () => {

  const mobiles = ["lg", "oppo", "vivo", "iphone"];
  const targetMobile = "iphone";

  const findMobileIndex = () => {
    const index = mobiles.indexOf(targetMobile);

    if(index !== -1){
      alert(`${targetMobile} is found at index ${index}`)
    } else {
      alert(`${targetMobile} is not found in the list`)
    }
  }


  return (
    <div>
      <h1>Mobiles list</h1>
      <button onClick = {findMobileIndex}>Find Index</button>
    </div>
  )
  
}

export default App
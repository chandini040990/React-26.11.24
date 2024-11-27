// i wanted to filter the words longer then 5 in char
const App = () => {
  const mobiles = ["LG", "iphone", "redmi", "oppo"];

  const addMobile = () => {
    mobiles.push("vivo");
    console.log(mobiles)
  }

  return(
    <>
    <h1>Mobile List items</h1>
    <ul>
      {mobiles.map((mobile) => (
        <li>{mobile}</li>
      ))}
    </ul>
    <button onClick = {addMobile}>Add Item</button>

    </>

  )

} 

export default App

// when i click an item, it should add





const App = () => {

  const mobiles = ["oppo", "vivo", "LG"];

  const removeItem = () => {
    mobiles.pop();
    console.log(mobiles)
  }

  return (
    <>
      <div>
        <h1>Mobiles</h1>
        <ul>
          {mobiles.map((mobile) => (
            <li>{mobile}</li>
          ))}
        </ul>

      </div>
      <button onClick={() => removeItem()}>Remove Item</button>

    </>
  )

}

export default App


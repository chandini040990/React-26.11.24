

// const App = () => {
//   // always we should not do anything on the original array

//   let names =["ram", "venkat", "jack", "john"];

//   const renderNames = () => {
//     // const nameElements = [];
//     names.forEach((name) => {
//       // nameElements.push(<li>{name}</li>)
//       console.log(name)
//     });
//   //  return nameElements;
//   }


//   return (
//     <>
//     <div>
//       <h1>Names list</h1>
//       <ul>{renderNames()}</ul>

//     </div>
      

//     </>
//   )

// }

// export default App

// I need to dispaly the list of names using foreach

const App = () => {
  const numbers = [1, 2, 3, 4, 5];

  const offerUpdate = () => {
    const doubled = [];
    numbers.forEach((num) => {
      doubled.push(num * 2)
    });
     console.log(doubled)
  }

  return (
    <div>
      <button onClick = {offerUpdate}>Offer update</button>
    </div>
  )
}

export default App
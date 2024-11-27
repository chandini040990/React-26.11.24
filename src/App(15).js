

const App = () => {

  const cartItems = [
    {id:1, name: "laptop", price: 20000, quantity: 2},
    {id:2, name: "mobile", price: 30000, quantity: 4},
    {id:3, name: "ac", price: 40000, quantity: 6},
    ]

    const totalPrice = cartItems.reduce((acc, current) => {
      return acc + current.price * current.quantity
    }, 0)

  return (
    <div>
        {totalPrice}
    </div>
  )
  
}

export default App

// reduce method will give the single value
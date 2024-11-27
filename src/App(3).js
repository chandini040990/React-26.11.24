

const App = () => {

  const products = [
    {id: 1, name: "IPhone", price: 98000, description: "Iphone latest 18.2 features are voice recording"},
    {id: 2, name: "oppo", price: 15000, description: "Latest update contains the more secuity features"}
  ]

  const options = ["Idly", "Dosa", "vada", "sambar"]
  return(
    <div>
      <h1>Products</h1>
        <div class = "product-list">
          {products.map((product) => (
            <div class = "product-card">
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
              <small>{product.description}</small>
            </div>
          ))}
        </div>

        <h1>Please choose your breakfast</h1>
        <select>
          {options.map((option, index) => (
            <option key = {index} value = {option}>
              {option}
            </option>
          ))}
        </select>
    </div>
  )

} 

export default App

import "./App.css"
const App = () => {
  const users = [
    {id: 1, name: "ram", age: 50},
    {id: 2, name: "venkat", age: 20},
    {id: 3, name: "balaji", age: 99}
  ]
  return(
    <div>
      <h1>User Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default App
// i wanted to filter the words longer then 5 in char
const App = () => {
  const users = [
    {id: 1, name: "venkat"},
    {id: 2, name: "ram"}
  ]

  const addUser = () => {
    users.push({id: 3, name: "jack"});
    console.log(users)
  }


  return(
    <>
    <h1>Users</h1>
    <ul>
      {users.map((user) => (
        <li>
          {user.name} (ID: {user.id})
        </li>
      ))}
    </ul>

    
    <button onClick = {addUser}>Add User</button>
    
    
    </>
  )

} 

export default App

// when i click an item, it should add



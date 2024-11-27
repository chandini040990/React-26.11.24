// i wanted to filter the even numbers

const App = () => {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evennumbers = numbers.filter((num) => num % 2 === 0); 
  console.log(evennumbers); //2 4 6 8 10
 
  return(
    <div>
      <h1>Even Numbers are</h1>
      <ul>
        {evennumbers.map((num) => (
          <li>{num}</li>
        ))}
        
      </ul>
    </div>
  )

} 

export default App



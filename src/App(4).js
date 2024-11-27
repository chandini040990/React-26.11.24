

const App = () => {

  const images = [
    {id:1, url:"https://m.media-amazon.com/images/I/31lr3Ij6iBL._SY445_SX342_QL70_FMwebp_.jpg", alt:"iphone"},
    {id:2, url:"https://m.media-amazon.com/images/I/31wHpKYsdhL._SY445_SX342_QL70_FMwebp_.jpg", alt:"iphone 15"},
  ]

  return(
    <div>
      <h1>Product Images</h1>
      {images.map((image) => (
        <img src = {image.url} alt = {image.alt} />
      ))}
    </div>
    
  )

} 

export default App



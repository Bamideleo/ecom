
import data from './data'
function App() {
  return (
   <div className="grid-container">
        <header className="row ">
     <div className="">
        <a href="/" className="brand">Ecom</a>
     </div>
     <div className="">
        <a href="/cart">Cart</a>
        <a href="/signin">Sign In</a>
     </div>
        </header>
        <main>
        <div className="row center">
          {data.products.map((product)=>(
            <div className="card" key={product.id}>
                <a href={`/product/${product.id}`}>
                   <img className="medium" src={product.image} alt={product.name}/> 
                </a>
                <div className="card-body">
                    <a href={`/product/${product.id}`}>
                       <h2>{product.name}</h2> 
                    </a>
                    <div className="rating">
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                    </div>
                    <div className="price">{product.price}</div>
                </div>
            </div>
          ))} 
        </div>
        </main>
        <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;


import React, { useState, useEffect } from "react";
import './App.scss';

const App = () => {

	const [products, setProducts] = useState();

	useEffect(() => {

		const fetchProducts = () => {
			fetch(`https://sleepy-depths-24610.herokuapp.com/products`)
				.then(response => response.json())
				.then(jsonData => setProducts(jsonData))
				.catch(err => console.log(err))
		}

		fetchProducts()
	}, []);

  return (
    <div className="App">
    <div className='section__body'>
				{products ? <div className="section__inner">
				<div className="products-provider"><h2>ProductList</h2></div>
					{products.map(article => <div key={article.id}>{article.name}</div>)}
				</div> : null}
			</div>
    </div>
  );
}

export default App;


import React, { useState, useEffect } from "react";
import './App.scss';

import {
  Header,
  Title,
  SubTitle,
  Navigation,
  NavigationList,
  NavigationItem,
  NavigationButton,
  ControlSection,
  ProductControls,
  ProductList,
  ProductItem,
  Main,
  SortButton,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductDescription
} from "./App.styles"

const App = () => {

  const [types, setTypes] = useState();
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchTypes = async () => {
      fetch(`https://sleepy-depths-24610.herokuapp.com/types`)
        .then(response => response.json())
        .then(jsonData => setTypes(jsonData))
        .catch(err => console.log(err))
    }

    fetchTypes()
  }, []);

  const fetchProducts = async (selectedType) => {
    fetch(`https://sleepy-depths-24610.herokuapp.com/products/${selectedType}`)
      .then(response => response.json())
      .then(jsonData => setProducts(jsonData))
      .catch(err => console.log(err))
  }

  const sortArray = () => {
    const sorted = [...products].sort((a, b) => b.price.value - a.price.value);
    console.log(sorted);
    setProducts(sorted);
  };

  return (
    <div className="App">
      <Header>
        <Title>mercado</Title>
      </Header>
      <Navigation>
        {types ? <NavigationList>
          {types.map(type =>
            <NavigationItem key={type.name}>
              <NavigationButton onClick={e => fetchProducts(type.name)}>{type.name}</NavigationButton>
            </NavigationItem>)}
        </NavigationList> : null}
      </Navigation>
      <Main>
        {products ?
          <div>
            <ControlSection>
              <SubTitle> product list</SubTitle>
              <ProductControls>
                <SortButton onClick={sortArray} disabled={!products}>sort by price</SortButton>
                <SortButton onClick={sortArray} disabled={!products}>sort by price</SortButton>
                <SortButton onClick={sortArray} disabled={!products}>sort by price</SortButton>
                <SortButton onClick={sortArray} disabled={!products}>sort by price</SortButton>
              </ProductControls>
            </ControlSection>
            <ProductList>
              {products.map(product => <ProductItem key={product.id}>
                <ProductImage></ProductImage>
                <ProductInfo>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>{product.price.value}{product.price.currency}</ProductPrice>
                  <ProductDescription>{product.description}</ProductDescription>
                </ProductInfo>
              </ProductItem>)}
            </ProductList>
          </div> : <SubTitle>select product type</SubTitle>}
      </Main>
    </div>
  );
}

export default App;

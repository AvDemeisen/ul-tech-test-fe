
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
  ProductControls,
  ControlsInner,
  ProductList,
  ProductItem,
  Main,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductDescription
} from "./App.styles"

const App = () => {
  const [types, setTypes] = useState();
  const [selectedType, setSelectedType] = useState();
  const [products, setProducts] = useState({});
  const [selectedProducts, setSelectedProducts] = useState();
  const [gridType, setGridtype] = useState(1);

  useEffect(() => {
    const fetchTypes = async () => {
      fetch(`https://sleepy-depths-24610.herokuapp.com/types`)
        .then(response => response.json())
        .then(jsonData => setTypes(jsonData))
        .catch(err => console.log(err))
    }

    fetchTypes()
  }, []);

  const selectType = (selected) => {
    setSelectedType(selected);
    if (!products[selected]) {
      fetchProducts(selected)
    } else {
      setSelectedProducts(products[selected])
    }
  }

  const fetchProducts = async (selectedType) => {
    fetch(`https://sleepy-depths-24610.herokuapp.com/products/${selectedType}`)
      .then(response => response.json())
      .then(jsonData => {
        setProducts({ ...products, [selectedType]: jsonData })
        setSelectedProducts(jsonData)
      })
      .catch(err => console.log(err))
  }

  const sortArray = (highToLow) => {
    const sorted = highToLow ?
      [...selectedProducts].sort((a, b) => a.price.value - b.price.value) :
      [...selectedProducts].sort((a, b) => b.price.value - a.price.value);
      setSelectedProducts(sorted);
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
              <NavigationButton onClick={() => selectType(type.name)}>{type.name}</NavigationButton>
            </NavigationItem>)}
        </NavigationList> : null}
      </Navigation>
      <Main>
        {selectedProducts ?
          <div>
            <SubTitle>{selectedType}</SubTitle>
            <ProductControls>
              <ControlsInner>
                <button className="control-button control-button--1 control-button--mobile-only" value={1} onClick={e => setGridtype(1)}></button>
                <button className="control-button control-button--2" value={2} onClick={e => setGridtype(2)}></button>
                <button className="control-button control-button--3 control-button--desktop-only" value={2} onClick={e => setGridtype(3)}></button>
              </ControlsInner>
              <ControlsInner>
                <button className="control-button" onClick={e => sortArray(false)}>high to low</button>
                <button className="control-button" onClick={e => sortArray(true)}>low to high</button>
              </ControlsInner>

            </ProductControls>
            <List items={selectedProducts} gridType={gridType}/>
          </div> : <SubTitle>select product type</SubTitle>}
      </Main>
    </div>
  );
}

const List = ({ items, gridType }) => (
  <ProductList cols={gridType}>
    {items.map(product => <ProductItem key={product.id}>
      <ProductImage cols={gridType}></ProductImage>
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price.value}{product.price.currency}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
      </ProductInfo>
    </ProductItem>)}
  </ProductList>
)

export default App;

import styled from 'styled-components';

export const Colors = {
    white: '#ffffff',
    black: '#000000',
    charcoal: '#24292e',
    cream: '#faf5f3',
    grey: '#616162',
    orange: '#FF8100',
    lightgrey: '#dfe1e5',
    pastelpink: '#fcd5E8',
    hotpink: '#ff69b4',
};

export const fontSizes = {
    xs: '0.6rem',
    sm: '0.8rem',
    md: '0.9rem',
    lg: '1.2rem',
    xl: '1.5rem',
    xx: '2.0rem',
};

export const gutterSizes = {
    guttersm: '0 10px',
    guttermd: '0 20px',
};

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 45px;
    background-color: ${Colors['white']};


    @media (min-width: 576px) {
        height: 65px;
    }
`;

export const Navigation = styled.nav`
    position: relative;
    display: flex;
    overflow-x: scroll;
    height: 45px;
    width: 100%;
    z-index: 100;
    box-sizing: border-box;
    background-color: ${Colors['charcoal']};

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const NavigationList = styled.ul`
    display: flex;
    flex-direction: row;
`;

export const NavigationItem = styled.li`
    height: 100%;
    list-style: none;
`;

export const NavigationButton = styled.button`
    padding: ${gutterSizes['guttersm']};
    height: 100%;
    border: 1px solid ${Colors['charcoal']};
    background-color: transparent;
    color: ${Colors['white']};
    font-size: ${fontSizes['sm']};
    text-transform: uppercase;
    letter-spacing: 2px;
    transform: 300ms ease all;

    &:hover {
        border: 1px solid ${Colors['white']};
    }

    &:active {
        color: ${Colors['pastelpink']};
    }

`;

export const Main = styled.main`
    height: calc(100vh - 80px);
    overflow-y: scroll;
    background-color: ${Colors['pastelpink']};
`;

export const Title = styled.h1`
    margin: 0;
    font-size: ${fontSizes['xx']};
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${Colors['charcoal']};
`;

export const SubTitle = styled.h2`
    margin: 10px 0;
    font-size: ${fontSizes['lg']};
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${Colors['charcoal']};
`

export const SortButton = styled.button`
    background-color: transparent;
    border: 1px solid ${Colors['charcoal']};
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export const ControlSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: ${gutterSizes['guttermd']};
    height: 20vh;
`;

export const ProductControls = styled.div`
    display: grid;
    height: 50%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 5px;
`;

export const ProductList = styled.ul`
    display: grid;
    padding: ${gutterSizes['guttermd']};
    grid-template-columns: 1fr;
    grid-gap: 20px;

    @media (min-width: 576px) {
        grid-template-columns: repeat(3, 1fr);
    }
` 

export const ProductItem = styled.li`
    height: 100%;
    list-style: none;
    background-color: ${Colors['white']};
`

export const ProductImage = styled.img`
    height: 250px;
    width: 100%;
    background-color: ${Colors['grey']};
`

export const ProductInfo = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 5px;
    padding: 10px;
`

export const ProductName = styled.h3`
    margin-bottom: 10px;
    font-family: Overpass,sans-serif;
    font-size: ${fontSizes['md']};
    color: ${Colors['charcoal']};
    font-weight: 700;
    letter-spacing: 0;
    word-break: break-word;
`

export const ProductPrice = styled.span`
    color: ${Colors['hotpink']};
`

export const ProductDescription = styled.span`
    font-family: Overpass,sans-serif;
    font-size: ${fontSizes['md']};
    color: ${Colors['charcoal']};
    font-weight: 300;
`
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import data from "./data"
import {useState} from "react";
import { Routes, Route, useNavigate} from 'react-router-dom';
import DetailItem from "./detailItem";
import axios from "axios";
import Cart from "./Cart";

function App() {

    let [shops, setShops] = useState(data);
    let navigator = useNavigate();

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=>navigator("/")}>Home</Nav.Link>
                        <Nav.Link onClick={()=>navigator("/cart")}>Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={
                    <>
                        <div className="main-bg"></div>
                        <div className="container">
                            <div className="row">
                                <Item shops={shops}></Item>
                            </div>

                            <button onClick={async ()=>{
                                let res = await axios.get('https://codingapple1.github.io/shop/data2.json')
                                    let data = res.data
                                setShops([...shops,...data]);
                            }
                            }>버튼</button>

                        </div>
                    </>
                }/>

                <Route path="/detail/:id" element=<DetailItem shops={shops}/>/>
                <Route path="/about" element={<div>어바웃페이지임</div>}/>
                <Route path="/cart" element={ <Cart/> } />
            </Routes>

        </div>
    );
}

function Item(props) {

    let navigator = useNavigate();

    return (
        props.shops.map(e => {
            return <div className="col-md-4" key={e.id} onClick={()=>navigator(`/detail/${e.id}`)}>
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
                <h4>{e.title}</h4>
                <p>{e.content}</p>
            </div>
        })
    );
}


export default App;

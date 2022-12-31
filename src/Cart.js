import {Button, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {changeCount, changeName} from "./store";


function Cart() {
    let user = useSelector((state) => { return state.user })
    return (
        <>
        {user}
        <Table>
            <thead>
            <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
            </tr>
            </thead>
            <tbody>
            <CartItem/>
            </tbody>
        </Table>
    </>
    )
}

function CartItem() {
    let cart = useSelector((state) => { return state.cart })
    let dispatch = useDispatch();

    return (
        cart.map((e,i) => {
            return <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.count}</td>
                <td><Button onClick={()=>dispatch(changeCount(e.id))}>+</Button></td>
            </tr>
        })
    )
}

export default Cart;
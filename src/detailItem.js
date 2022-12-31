import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {appendCart} from "./store"
import {useDispatch} from "react-redux";

function DetailItem(props) {

    let [alert, setAlert] = useState(true);
    let [waring, setWaring] = useState(false);

    useEffect(() => {
        setTimeout(() => setAlert(false), 2000)
    })

    let {id} = useParams();
    let returnData = props.shops.find(e => e.id === Number(id))
    let dispatch = useDispatch();

    return (
        <div className="container">
            {
                alert ?
                    <div id="test" className="alert alert-warning">2초이내 구매 시 할인</div>
                    :
                    null
            }

            {
                waring ?
                    <div id="test" className="alert alert-warning">제대로 된 수량 입력 해 주세요</div>
                    :
                    null
            }

            <input type="text" onChange={e => {
                isNaN(Number(e.target.value)) === true ? setWaring(true) : setWaring(false);
            }}/>

            <div className="row">
                <div className="col-md-6">
                    <img src={returnData.img} width="100%"/>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{returnData.title}</h4>
                    <p>{returnData.content}</p>
                    <p>{returnData.price}</p>
                    <button className="btn btn-danger" onClick={() => {
                        let obj = {}
                        obj.id = 3;
                        obj.name = returnData.content
                        obj.count = 1
                        dispatch(appendCart(obj))
                    }
                    }>주문하기
                    </button>
                </div>
            </div>
        </div>

    )
}


export default DetailItem;
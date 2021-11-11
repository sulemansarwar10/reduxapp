import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actioncreators } from '../state/index';

const Shop = () => {
    const dispatch = useDispatch()
    const { withdrawmoney, depositmoney } = bindActionCreators(actioncreators, dispatch);
    return (
        <div>
            <h1>Withdraw/Deposit Money</h1>
            {/* <button type="button" class="btn btn-primary mx-2 my-2" onClick={() => { dispatch(actioncreators.depositmoney(100)) }}>Deposit</button>

            <button type="button" class="btn btn-primary mx-2 my-2 " onClick={() => { dispatch(actioncreators.withdrawmoney(100)) }}>withdraw</button> */}


            <button type="button" class="btn btn-primary mx-2 my-2" onClick={() => { depositmoney(100) }}>Deposit</button>

            <button type="button" class="btn btn-primary mx-2 my-2 " onClick={() => { withdrawmoney(100) }}>withdraw</button>


        </div>
    )
}

export default Shop



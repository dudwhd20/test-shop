import {configureStore, createSlice} from '@reduxjs/toolkit'

let user = createSlice({
    name        : 'user',
    initialState: "kim",
    reducers    : {
        changeName(state) {
            return 'john ' + state
        },
    },
})

let cart = createSlice({
    name        : 'cart',
    initialState: [
        {id: 0, name: 'White and Black', count: 2},
        {id: 2, name: 'Grey Yordan', count: 1},
    ],
    reducers    : {
        changeCount(state, action) {
            let target = state.find(e=> e.id === action.payload );
            target.count += 1;
        },
        appendCart(state,action){
            state.push(action.payload)
        }
    },

})

export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer,
    },
})

export let {changeName} = user.actions

export let {changeCount,appendCart} = cart.actions

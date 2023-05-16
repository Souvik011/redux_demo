const redux = require('redux');

const counterReducer = (state = { counter:0 }, action) => {
    if(action.type==='increment'){
        return {
        counter:state.counter+1
        };
    }
    else if (action.type==='decrement') {
        return {
        counter:state.counter-1
        };
    }
    else if (action.type==='INCREMENTBY2'){
        return {
            counter:state.counter+2
        };
    }
    else if (action.type==='DECREMENTBY2'){
        return {
            counter:state.counter-2
        };
    }
    else{
        return state
    }
    
};

const store = redux.createStore(counterReducer);



const counterSubscriber  = () => {
   const latestState =  store.getState();
//    console.log(latestState);
};



store.subscribe(counterSubscriber);

store.dispatch({type:'increment'});
console.log(store.getState());
store.dispatch({type:'INCREMENTBY2'});
store.dispatch({type:'INCREMENTBY2'});
console.log(store.getState());
store.dispatch({type:'DECREMENTBY2'});
console.log(store.getState());


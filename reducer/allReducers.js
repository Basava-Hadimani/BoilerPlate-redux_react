import {combineReducers} from 'redux';


const reducer1 =(state = [], action) => {
  switch(action.type){
    case 'addToCart' :
                        console.log(state);
                        return [...state, action.item];

    case 'removeFromCart' :
                            if(!state.length){
                              console.log("no resources");
                            }else{
                              console.log(state);
                                    const index = state.indexOf(action.item);
                                    if (index >= 0){
                                    state.splice(index, 1);
                                  }
                            }

                            return [...state];
    default :
                          return state;


  }

}



 const allReducers = combineReducers  ({

  reducer1 : reducer1

});


export default allReducers;

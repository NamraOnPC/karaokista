export default function venuesReducer(state={
    firstLoad: true,
    list: {}
}, action){
    switch(action.type){
        case "VENUES_RECEVIED":{
            state = {
                ...state,
                firstLoad: false,
                list: action.value ? action.value : {}
            };
            break;
        }
        case "ADDED_VENUE":{
            
            break;
        }
    }
    return state;
}
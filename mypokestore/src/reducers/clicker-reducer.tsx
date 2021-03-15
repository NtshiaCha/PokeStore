import { clickerTypes } from '../actions/clicker.component';

export interface ClickerState {
    clicks: number;
}

const initialState = {
    clicks: 0
};

const clickerReducer = (state = initialState, action: any) => {
    console.log(state, action);

    switch(action.type) {
        case clickerTypes.ADD_CLICKS:
            return {
                ...state,
                clicks: state.clicks + action.payload
            };
        
        case clickerTypes.SPEND_CLICKS:
            return {
                ...state,
                clicks: state.clicks - action.payload
            };
    }
    return state;
}

export default clickerReducer;
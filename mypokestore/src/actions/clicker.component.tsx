export const clickerTypes = {
    ADD_CLICKS: 'ADD_CLICKS',
    SPEND_CLICKS: 'SPEND_CLICKS'
}

// Called an action for convenience sake
// What it really is: ActionFactory
export const addClicks = (clicks: number) => (dispatch: any) => {
    /*
    Dispatch is a function that will be called to dispatch an event
    for the dispatcher to provide to reducers.
    We provide two pieces of information to the dispatcher in the object
    passed to it.
    This is a payload which repesents any data the reducer will be 
    dependent upon, and the type of action being dispatched.
    */
    console.log('Add clicks!');
    dispatch({
        payload: clicks,
        type: clickerTypes.ADD_CLICKS
    })
}

export const spendClicks = (clicks: number) => (dispatch: any) => {
    dispatch({
        payload: clicks,
        type: clickerTypes.SPEND_CLICKS
    });
}
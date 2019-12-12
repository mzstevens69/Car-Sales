
export const ADD = 'ADD_FEATURE'

export const REMOVE = 'REMOVE_FEATURE'

export const addFeature = (addOn) => ({
    type: ADD,
    payload: addOn
//pass in AddOn as arg so essentially arg and payload are same on actions
})

export const removeFeature = (addOn) => ({
    type: REMOVE,
    payload: addOn
})
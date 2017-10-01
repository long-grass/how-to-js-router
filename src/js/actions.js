export function loadRoute (route){
    return {
        type: 'CHANGE_ROUTE',
        route
    }
}

export function increaseKendal (count){
    console.log(count)
    return {
        type: 'INCREASE_KENDAL',
        count
    }
}
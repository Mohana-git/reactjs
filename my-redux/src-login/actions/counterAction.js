
const increment = () => {
    return{
       type: "increment"
    }
}

const decrement = () => {
    return{
        type: "decrement"
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    increment , 
    decrement }

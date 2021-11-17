//CommonJS
const action=()=>{
    console.log('hello')
}

//wrap your code and can be shared to other js file
module.exports = action

//***************************************************************************
//ES 
export const action =()=>{
    console.log('hello')
}

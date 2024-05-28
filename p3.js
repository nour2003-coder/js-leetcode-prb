var createCounter=function(n){
    let i=n;
    function increment(){
        return(++i);

    }
    function decrement(){
        return(--i);

    }
    function reset(){
        i=n;
        return(i);

    }
   
    return {
        increment:increment,
        decrement:decrement,
        reset:reset
    };

}
const c=createCounter(5);
console.log(c.increment())
console.log(c.increment())
console.log(c.decrement())


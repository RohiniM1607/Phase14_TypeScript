function someFn(){
    if(true){
        var localVar = 1000;
        console.log("Inside if "+localVar);
    }
    console.log("Inside function "+localVar);
    function nested(){
        console.log("Inside nested function "+localVar);
    }
    nested()
}
someFn()
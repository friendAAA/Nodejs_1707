let count = 0;

let timer = setImmediate(function () {
    // console.log(arguments.callee); // todo
    console.log(count++);
    if (count < 5) { // Ctrl + Alt + T
        setImmediate(arguments.callee);
    } else {
        clearImmediate(timer);
    }
});
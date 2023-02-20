
function text (f) {
    console.log(1);
    f()
    console.log(3);
}
function add() {
    console.log(2);
}
text(add)
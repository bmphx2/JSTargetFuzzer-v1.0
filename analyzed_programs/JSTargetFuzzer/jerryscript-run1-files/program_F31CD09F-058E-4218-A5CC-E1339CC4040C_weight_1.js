new WeakSet();
function f8() {
    return f8;
}
with (Symbol.isConcatSpreadable) {
    function F15(a17, a18, a19) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F15(Symbol);
}

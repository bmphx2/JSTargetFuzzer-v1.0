const o6 = {
    get b() {
        return [arguments];
    },
};
function f7(a8, a9) {
    a8[4] = a8;
    return f7;
}
new Promise(f7);
function F16() {
    if (!new.target) { throw 'must be called with new'; }
}
const v18 = new F16();
const o20 = {
    "defineProperty": Number,
};
const v22 = new Proxy(v18, o20);
v22[536870912] = v22;
Math.random();
Math.asinh(Math);
function F33(a35, a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
    const v39 = new Date();
    Reflect.get(v39.toUTCString);
}
new F33();

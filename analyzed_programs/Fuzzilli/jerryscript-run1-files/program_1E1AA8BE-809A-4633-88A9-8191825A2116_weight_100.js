class C6 {
    set h(a8) {
        try { a8(this, this); } catch (e) {}
        [NaN];
        [95752.72542027221,1.7976931348623157e+308];
        [50880.66203146195,2.6688933382980917e+307];
    }
    static [1] = 1073741823;
    e;
    static #c;
    static 268435456 = -268435456n;
}
const v13 = new C6();
const v14 = new C6();
const v15 = new C6();
1 >= -256n;
v15[1073741824n] = v13;
v14[v15 === 1073741824n] = 1073741823;
const o19 = {
    "call": EvalError,
    "defineProperty": EvalError,
    "deleteProperty": EvalError,
    "get": EvalError,
    "getPrototypeOf": EvalError,
    "has": EvalError,
    "ownKeys": EvalError,
    "preventExtensions": EvalError,
    "set": EvalError,
    "setPrototypeOf": EvalError,
};
new Proxy(v13, o19);

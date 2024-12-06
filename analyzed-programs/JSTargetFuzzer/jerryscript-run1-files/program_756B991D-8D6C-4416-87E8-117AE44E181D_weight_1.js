function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a9;
    this.g = "function";
    this.h = a8;
}
const v10 = new F6(662244047n, "function");
const v11 = new F6(2n, "boolean");
new F6(-4n, "3");
[];
const v18 = v10.g;
function f21() {
    return 62781;
}
let v23 = ("3")["search"](v18);
v23 = 10;
const o24 = {
    "construct": f21,
    "defineProperty": f21,
    "deleteProperty": f21,
    "getPrototypeOf": f21,
    "has": f21,
    "preventExtensions": f21,
};
new Proxy(v11, o24);
function f28(a29, a30) {
    throw 4.0;
    return a30;
}
new Promise(f28);

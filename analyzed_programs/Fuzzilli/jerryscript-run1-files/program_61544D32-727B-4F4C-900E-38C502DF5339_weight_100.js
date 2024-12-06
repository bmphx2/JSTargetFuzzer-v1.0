function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = f0;
    this.e = f0;
}
const v3 = new F1();
const v4 = new F1();
new F1();
function f6() {
    return v3;
}
function f7() {
    return f6;
}
const o8 = {
    "apply": f0,
    "deleteProperty": f6,
    "get": f0,
    "getOwnPropertyDescriptor": f7,
    "ownKeys": f6,
    "preventExtensions": f0,
    "setPrototypeOf": f0,
};
new Proxy(v4, o8);
function f11() {
    return f0;
}
const o22 = {
    set c(a17) {
    },
    ["P"](a19, a20) {
        super.g;
    },
};
async function f23(a24, a25, a26, a27) {
    const v29 = new Date();
    await v29;
    return "P";
}
f23(f23, "P", o22, "P");

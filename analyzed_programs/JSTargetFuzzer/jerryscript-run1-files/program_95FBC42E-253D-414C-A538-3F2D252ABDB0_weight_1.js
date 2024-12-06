function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a9;
    a9.h = a11;
    a9.b = "b";
}
const v12 = new F6("-2147483647", "-2147483647", -536870912, "-2147483647");
const v13 = new F6("-2147483647", v12, 1573304671, v12);
new F6("128", "-2147483647", -10, v13);
new Uint32Array(1668);
new Int16Array(255);
new Uint8Array(512);
const v25 = new Int8Array(Int8Array);
try {
    Object.defineProperty(v25, 2147483647, { enumerable: true, get: Symbol });
} catch(e27) {
}

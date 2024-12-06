function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 1;
    this.e = 1;
}
new F0();
new F0();
new F0();
const v11 = new Array(129);
if (v11) {
    Array.toString = Array;
} else {
}
const v13 = [];
const v14 = [v13];
try {
    v13.toString = v13[127];
    Object.defineProperty(v11, 1024, { writable: true, configurable: true, enumerable: true, value: Array });
    Math.tanh(-1);
    (-1 >>> v11) << 4;
    Math.fround(v11);
    SyntaxError(v14);
} catch(e25) {
    const o26 = {
        "isExtensible": Array,
    };
    new Proxy(e25, o26);
}

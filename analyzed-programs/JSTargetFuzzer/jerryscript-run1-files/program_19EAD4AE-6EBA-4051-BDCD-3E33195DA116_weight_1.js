function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 512;
    this.a = 512;
    this.c = 512;
}
new F0();
new F0();
const v5 = new F0();
const v8 = new Uint32Array(79);
const v11 = new Uint16Array(11);
const v14 = new BigUint64Array(2283);
Object.defineProperty(v5, v14, { configurable: true, enumerable: true, value: v11 });
let [v15] = v8;
v5 | v14;
const v18 = Symbol.split;
v5[v18] = v18;
v14.b = 79;
function f19() {
    return Uint32Array;
}

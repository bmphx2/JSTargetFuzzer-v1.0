function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -9007199254740990;
}
new F0();
new F0();
const v5 = new F0();
new BigInt64Array(1);
try {
} catch(e10) {
} finally {
}
let v11 = -1582169311;
v5 - v11--;
new Function(12);
new Uint8ClampedArray(257, Function);
const o20 = {
    get g() {
        return this;
    },
};
let v21 = [o20,o20,o20,o20];
let v22 = --v21;
let v23 = ++v22;
Object.defineProperty(o20, "g", { value: --v23 });

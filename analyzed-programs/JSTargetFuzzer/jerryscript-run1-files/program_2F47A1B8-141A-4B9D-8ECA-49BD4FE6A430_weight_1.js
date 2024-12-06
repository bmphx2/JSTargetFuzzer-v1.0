function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -4294967296;
}
new F0();
new F0();
new F0();
new Int8Array(132);
new Int32Array(512);
new Uint16Array(2);
const v18 = [];
let v19 = BigInt64Array;
v19 <<= v19;
try {
    v18.__proto__ = v18;
} catch(e20) {
}

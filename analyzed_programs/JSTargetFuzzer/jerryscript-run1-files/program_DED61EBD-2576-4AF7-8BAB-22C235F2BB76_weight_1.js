function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 9007199254740990;
    this.a = 9007199254740990;
    this.f = 9007199254740990;
    const v5 = new Int8Array(63);
    function f6(a7, a8) {
        v5["some"](a7);
        return Int8Array;
    }
    new Promise(f6);
}
new F0();
new F0();
new F0(F0);
const v21 = new Uint8ClampedArray(223);
const v24 = new Uint16Array(5);
v21.lastIndexOf(...v24);
new Int8Array(2578);
new Uint32Array(3667);
new BigUint64Array(3566);
new Uint32Array([6,17590]);

function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -9007199254740990;
    this.h = -9007199254740990;
}
const v3 = new F0();
new F0();
new F0();
const v8 = new BigUint64Array(13);
const v11 = new Uint32Array(1000);
new Uint8ClampedArray(3471);
v3.g ||= 1000;
typeof BigUint64Array === "undefined";
delete v8[v11];

[];
const v2 = new WeakSet();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a5;
    this.b = a6;
}
const v7 = new F3(v2, F3);
const v8 = new F3(WeakSet, WeakSet);
new F3(v7, v8);
const v13 = [1073741825,-256,-1095654992,-736534788,-1];
const v14 = [0,-9007199254740992,-1627403734,-2147483648];
const v15 = [13,-3890,9007199254740991,1,536870887,1194353098];
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    a19.h = a18;
    this.f = this;
}
new F16(v15, "undefined");
new F16(v13, "undefined");
new F16(v14, "undefined");
let v23 = 2732;
const v25 = new Int8Array(v23);
new Uint8ClampedArray(4026);
const v31 = new BigUint64Array(129);
function f32(a33, a34, a35, a36) {
    const o41 = {
        toString(a38, a39) {
            v31[1073741823] = Int8Array;
            this.length = 0;
            return 0;
        },
        2: BigUint64Array,
        "b": 4026,
        "d": a33,
        __proto__: v25,
    };
    return o41;
}
const v42 = f32(129, 4026, 129, 129);
f32(v23, 4026, v23, 129);
v42[129] = f32(4026, v23, v23, v23)[0];
v23 = 4026;
new Uint8ClampedArray(256);
new Uint8ClampedArray(3);
new BigInt64Array(3);

function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 536870888;
    this.f = 536870888;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0(F0, F0, v3);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a11;
    a11.f = 4;
}
new F9(v5, v3, v5, -1732502172);
new F9(v5, v3, v3, 4);
new F9(v4, v3, v3, -1732502172);
new Uint8ClampedArray([4.0,0.7137662539774001,800.1465636629484]);
const v26 = new Uint8Array(63);
function f27(a28, a29) {
    v26["some"](a28);
    a28 = 15;
    Object.defineProperty(v4, 4, { enumerable: true, get: f27, set: f27 });
    a29 = "some";
    new WeakSet();
    return Uint8Array;
}
new Promise(f27);

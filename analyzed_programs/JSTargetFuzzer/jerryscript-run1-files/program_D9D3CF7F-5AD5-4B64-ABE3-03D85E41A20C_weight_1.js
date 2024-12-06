function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -29452;
    this.f = -29452;
    this.g = -29452;
}
const v3 = new F0();
new F0();
const v5 = new F0();
try { v5["resize"](F0, 11, "resize", v3); } catch (e) {}
new Array(1524);
new Uint32Array(11);
new Uint8ClampedArray(64);
new BigInt64Array(6);
function F20(a22) {
    if (!new.target) { throw 'must be called with new'; }
}
class C23 extends F20 {
    constructor(a25, a26, a27) {
    }
    /*
    constructor(a29, a30, a31) {
        a30 * this;
    }
    */
}

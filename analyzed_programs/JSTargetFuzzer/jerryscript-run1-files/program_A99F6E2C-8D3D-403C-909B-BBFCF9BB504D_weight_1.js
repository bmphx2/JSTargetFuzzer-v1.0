function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -26599;
}
new F0();
new F0();
const v5 = new F0();
const v6 = [v5];
[[v6,F0]];
new Int32Array(76);
new BigUint64Array(129);
new Uint8ClampedArray(3);
const v20 = new Date("setUTCDate");
const v21 = v20.__proto__;
try { v6.lastIndexOf(v21); } catch (e) {}

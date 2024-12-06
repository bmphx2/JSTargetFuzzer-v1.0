function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.unscopables = -26599;
}
const v3 = new F0(F0, F0, F0, F0);
new F0();
const v5 = new F0(F0);
const v6 = [v5];
[[v6,F0,F0,v3,F0]];
new Int32Array(7);
new print(1);
new Uint8ClampedArray(3, v6);
const v20 = new Date("setUTCDate");
const v21 = v20.__proto__;
try { v6.lastIndexOf(v21); } catch (e) {}

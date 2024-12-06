function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -13;
    this.a = -13;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -4294967297n;
}
new F12(-42208, v4, -6n);
new F12(-42208, v5, 65537n);
new F12(-13, v4, 65537n);
new Int8Array(2);
const v25 = new Int8Array(7);
const v28 = new BigUint64Array(3611);
const v31 = new Int32Array(11);
new Uint16Array(2);
new Int8Array(1812);
Number.NaN = 23462;
v31[268435441] <<= 11;
if (Int8Array < v28) {
    function f41(a42, a43, a44) {
        a43 = v5;
        a42[Symbol.split] = 1073741823;
        return 11;
    }
    f41(2, f41, -13);
    const v52 = -v31;
    +(v31 / v52);
    const v55 = +10223;
    0.7287685177565071 << v31;
    +v52;
    v55 + 937;
} else {
    v25[v25];
}

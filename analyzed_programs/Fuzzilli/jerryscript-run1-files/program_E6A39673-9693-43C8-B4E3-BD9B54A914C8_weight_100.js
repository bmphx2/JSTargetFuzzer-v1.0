/[^wqO\1\2(a(?:\1(b\1\2))\2)\1+]/vygs;
const v10 = /B/vmi;
const v11 = /\xe2\x81\xa3abc+?/vyd;
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a14;
    this.f = a16;
}
new F12(-9223372036854775807, -1872, v11);
new F12(3, 2779, v11);
new F12(268435456, 3, -11);
const o22 = {
    "maxByteLength": 536870889,
};
const v24 = new ArrayBuffer(2222, o22);
const v26 = new Int8Array(v24);
try { v10.test(v26); } catch (e) {}

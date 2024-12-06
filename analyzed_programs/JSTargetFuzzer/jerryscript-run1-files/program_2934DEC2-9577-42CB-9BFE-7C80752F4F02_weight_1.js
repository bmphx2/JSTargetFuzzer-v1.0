function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 512;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
new Set();
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a11;
    this.c = a10;
}
new F8(v5, v4);
new F8(v4, v5);
new F8(v3, v5);
const v17 = new Uint16Array();
let {...v18} = v17;
const o24 = {
    "h": 128,
};
Math.hypot(F8);
const v28 = F8 >>> 2147483649;
const v29 = 2147483649 || v28;
v29 << v29;
v28 * 2147483649;
Math.cbrt(v28);
const v35 = RegExp.bind(2);
let v37 = -1949995745;
const v39 = v37 & -907437979;
const v40 = v37--;
Math.log2(o24);
Math.clz32(v40);
v40 >> v39;
-v37;
v35();

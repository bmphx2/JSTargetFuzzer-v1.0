function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 2;
}
const v3 = new F0();
const v4 = new F0(F0, v3);
const v5 = new F0();
const v7 = new Date();
function F8(a10, a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v3;
    this.prototype = Date;
}
const v14 = new F8(F0, v7, v5, Date);
new F8(Date, v14, v5, v5);
new F8(v5, v14, v4, v3);
const v22 = new Uint32Array(181);
function f24() {
    Symbol.for();
    return 8;
}
const v27 = f24();
let v28 = BigUint64Array;
let v29 = new v28(8);
[f24,,v28,v29] = v22;
try { v28["abs"](181, 253, v28, Date, v27, "abs"); } catch (e) {}
new Uint16Array(253);
for (let i43 = 0; i43 < 2; i43++) {
    const v49 = new Function("x");
    v49.h;
}
Function();
([2,52653,-1256362665,-234813797,1,7,3,-95777581,65537,-9223372036854775807])["indexOf"](("symbol")[5], 4096);

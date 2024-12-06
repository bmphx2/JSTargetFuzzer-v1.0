const v1 = new Set();
const v2 = [Set,v1,Set];
const v3 = [v2,v2];
const v4 = [v3,v1];
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a11;
    this.g = a10;
}
new F8(v3, v4);
new F8(v3, v4);
new F8(v4, v3);
new BigInt64Array(4);
new Float64Array(64);
let v21 = 5;
new Uint16Array(v21);
const v26 = new Uint32Array(181);
let v28 = BigUint64Array;
new v28(1);
let v30 = 253;
[v30,,v28,v21] = v26;
try { v28["abs"](181, v30, v28); } catch (e) {}
new Uint16Array(v30);
for (let i43 = 0; i43 < 2; i43++) {
    const v49 = new Function("x");
    v49.name;
}
Function();

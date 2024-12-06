new Int32Array(1);
new Int8Array(3584);
new Int16Array(8);
function f9() {
    return 1;
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a12;
    this.e = 3584;
}
new F10(3584, 1);
new F10(3584, 8);
new F10(1, 8);
const v21 = new Int8Array();
const v22 = v21.values();
const v25 = new BigInt64Array(2);
v25.lastIndexOf(v22, 1024);
const v27 = new Uint32Array(181);
let v29 = BigUint64Array;
let v30 = new v29(1);
let v31 = 253;
[v31,,v29,v30] = v27;
try { v29["abs"](181, v31, v29); } catch (e) {}
new Uint16Array(v31);
for (let i44 = 0; i44 < 2; i44++) {
    const v50 = new Function("x");
    v50.name;
}
Function();

function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a5;
}
new F3(6, ..."string", -5, F3, 6, 6);
new F3(-268435456);
const v11 = new F3("string");
new F3("string");
const v13 = new F3("description");
function f14() {
    return "string";
}
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a21;
}
new F18(v11, v11);
new F18(v13, v13);
new F18(v13, v13);
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

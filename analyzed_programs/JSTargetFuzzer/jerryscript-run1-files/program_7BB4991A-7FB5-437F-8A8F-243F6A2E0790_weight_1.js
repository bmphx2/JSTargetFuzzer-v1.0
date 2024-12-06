function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -128;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function f6(a7, a8) {
    const o15 = {
        __proto__: a7,
        "e": F0,
        "a": F0,
        "f": a7,
        [v4]: a8,
        toString(a10, a11, a12) {
            try {
                super.m(a8, this);
            } catch(e14) {
            }
            return this;
        },
    };
    return o15;
}
f6(f6(v3, v4), f6(v3, v4));
new Uint16Array(9);
const v27 = new Float64Array(256);
const v30 = new Int8Array(4096);
[9,v27,Uint16Array,Uint16Array,[256,9,4096,[v30,Float64Array,256]]];
new Array(127);
const v39 = new Uint32Array(181);
let v41 = BigUint64Array;
let v42 = new v41(1);
let v43 = 253;
[v43,,v41,v42] = v39;
try { v41["abs"](181, v43, v41); } catch (e) {}
new Uint16Array(v43);
for (let i56 = 0; i56 < 2; i56++) {
    const v62 = new Function("x");
    v62.name;
}
638046528 + "x";
new Uint8ClampedArray(9);
new Int32Array(16);
async function* f72(a73, a74) {
    return f72;
}
f72().next(f72);
new Int8Array(255);
Function();

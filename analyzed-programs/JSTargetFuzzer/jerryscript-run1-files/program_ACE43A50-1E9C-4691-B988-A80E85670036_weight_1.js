function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = f0;
    this.c = f0;
    this.g = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v4;
    this.a = f0;
}
const v9 = new F6(v4);
const v10 = new F6(v5);
const v11 = new F6(v4);
function f12(a13, a14, a15) {
    const o22 = {
        "d": v4,
        m(a17, a18) {
            let v19 = 10;
            for (; v19--;) {
                super.g;
            }
            return a15;
        },
    };
    return o22;
}
f12(v10, v11, v5);
const v24 = f12(v9, v10, v3);
f12(v24, v24, v3);
new Uint16Array(9);
const v31 = new Float64Array(256);
const v34 = new Int8Array(4096);
[9,v31,Uint16Array,Uint16Array,[256,9,4096,[v34,Float64Array,256]]];
const v40 = new Uint8Array(Uint8Array, Uint8Array, Uint8Array);
Reflect - v40;
new Array(127);
const v47 = new Uint32Array(181);
let v49 = BigUint64Array;
let v50 = new v49(1);
let v51 = 253;
[v51,,v49,v50] = v47;
try { v49["abs"](181, v51, v49); } catch (e) {}
new Uint16Array(v51);
for (let i64 = 0; i64 < 2; i64++) {
    const v70 = new Function("x");
    v70.name;
}
638046528 + "x";
new Uint8ClampedArray(9);
new Int32Array(16);
new Int8Array(255);
Function();

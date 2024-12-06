function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -42484;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o13 = {
        get b() {
            return -5;
        },
        "f": v4,
        13: v5,
        "c": a8,
        [a8]: a7,
    };
    return o13;
}
const v14 = f6(v5, v4);
f6(v4, v5);
+f6(v3, v3);
f6 === f6;
new Uint16Array(9);
const v30 = new Float64Array(256);
const v33 = new Int8Array(4096);
const v35 = [256,9,4096,[v33,Float64Array,Uint16Array]];
const v36 = [9,v30,Uint16Array,Uint16Array,v35];
new Array(127);
const v42 = new Uint32Array(181);
let v44 = BigUint64Array;
function f45() {
    return v35;
}
v14[536870912] = v36;
v5.valueOf = Array;
let v46 = new v44(1);
let v47 = 253;
[v47,,v44,v46] = v42;
try { v44["abs"](181, v47, v44); } catch (e) {}
new Uint16Array(v47);
for (let i60 = 0; i60 < 2; i60++) {
    const v66 = new Function("x");
    v66.name;
}
638046528 + "x";
new Uint8ClampedArray(9);
new Int32Array(16);
new BigUint64Array(0);
new Float32Array(1000);
new BigInt64Array(245);
new Int8Array(255);
Function();

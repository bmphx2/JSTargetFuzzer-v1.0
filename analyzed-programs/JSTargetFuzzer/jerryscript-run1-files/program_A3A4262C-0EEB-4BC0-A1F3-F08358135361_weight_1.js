function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -8;
    this.b = -8;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o19 = {
        __proto__: a7,
        get c() {
            new Uint32Array(2878);
            new BigInt64Array(9);
            const v18 = new Uint8Array(512);
            return v18;
        },
    };
    return o19;
}
const v21 = Error();
const v23 = new Uint32Array();
try {
    Object.defineProperty(v23, 2, { configurable: true, set: v21 });
} catch(e25) {
}
f6(v5, v3);
f6(v5, v4);
f6(v4, v5);
new Uint8Array(1024);
new Float32Array(128);
new Int16Array(129);
new Uint16Array(9);
new Uint32Array();
const o49 = {
    valueOf() {
        super.f = this;
        return this;
    },
};
const v50 = new Float64Array(256);
const v53 = new Int8Array(4096);
[9,v50,Uint16Array,Uint16Array,[256,9,4096,[v53,Float64Array,256]]];
("9").lastIndexOf();
eval("4");
1.3541845898040805e+308 <= 536870887n;
new Uint8Array();
new Array(127);
const v72 = new BigInt64Array(245);
function f73(a74, a75) {
    v72.map(a74);
    return a75;
}
new Promise(f73);
const v81 = new Uint32Array(181);
let v83 = BigUint64Array;
let v84 = new v83(1);
let v85 = 253;
[v85,,v83,v84] = v81;
try { v83["abs"](181, v85, v83); } catch (e) {}
new Uint16Array(v85);
for (let i98 = 0; i98 < 2; i98++) {
    const v104 = new Function("x");
    v104.name;
}
638046528 + "x";
new Uint8ClampedArray(9);
new Int32Array(16);
new Int8Array(255);
Function();

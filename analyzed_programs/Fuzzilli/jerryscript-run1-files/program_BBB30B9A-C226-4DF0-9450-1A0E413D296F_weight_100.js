function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f0;
    this.f = f0;
    this.d = f0;
}
const v3 = new F1();
const v4 = new F1();
new F1();
v4[4] = v3;
v4[v3] = v3;
const v7 = f0();
function f8() {
    return v7;
}
new Int16Array(794);
new Uint8Array(13);
new BigUint64Array(4040);
let v17 = [];
const v18 = [v17,v17,v17,v17,v17];
const v21 = new Uint8ClampedArray(6);
let v22 = Int8Array;
const v23 = new v22();
let v26 = 50937;
const v27 = [1000000.0];
const v29 = new Date();
const v31 = 4040 !== [v29,v29,v29];
for (let i35 = 0, i36 = 10;
    (() => {
        async function f37(a38, a39, a40, a41) {
            await "stack";
            return v31;
        }
        f37(19719, "undefined", i36, v27);
        return i35 < i36;
    })();
    i35++) {
    const t39 = "undefined";
    t39.__proto__ = "undefined";
    const v56 = v26 + i36;
    Math.acos(v56);
    Math.asin(6);
    Math.abs(v56);
    ++v26;
    !6;
}
new v22(...[v21], ...v23, v22, v17 >>= v18);
(v22 += Int8Array) % 6;
Math.sinh();

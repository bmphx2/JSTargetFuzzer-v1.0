const v2 = new Int16Array(10);
const v5 = new Int16Array(3971);
const v8 = new Float32Array(5);
const v9 = [10,v8,5];
v9[v9];
const v11 = v5.__proto__;
try { v8.reduceRight(v11, Int16Array); } catch (e) {}
const o15 = {
    "maxByteLength": 529,
};
const v17 = new ArrayBuffer(11, o15);
new Uint8ClampedArray(v17);
const v20 = [v9,v2];
const v21 = [Int16Array,v8,10];
const v22 = [];
const o23 = {
    __proto__: v22,
};
function f25(a26, a27, a28, a29) {
    const o30 = {
        "g": a26,
        "d": Float32Array,
    };
    return o30;
}
f25(v21, v21, v11, v9);
f25(o15, v11, Int16Array, o23);
f25(10, v9, Int16Array, v20);
Int16Array & o23;

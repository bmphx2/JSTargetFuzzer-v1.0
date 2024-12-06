let v4 = Int16Array;
const v5 = new v4(4);
let v7 = 10;
for (; v7--;) {
    Object.defineProperty(v5, "c", { enumerable: true, value: v5 });
    v5[1452] = v7;
    ++v4;
}
new Uint8ClampedArray(v5);
const v14 = new Int8Array(512);
const v17 = new BigInt64Array(3278);
new Int32Array(239);
new Int8Array(255);
const v25 = new Int16Array(Int8Array);
let v26 = -268435456n;
function f27() {
    return v17;
}
const o28 = {
    "get": f27,
};
const v30 = new Proxy(v25, o28);
let v31 = "2";
function f32(a33, a34, a35) {
    Object.defineProperty(o28, 1000, { configurable: true, enumerable: true, get: f27 });
    v14.__proto__ = v30;
    return Int16Array;
}
f32(31, 512, 255);
let v38 = -14n in v30;
({"a":v31,"f":v38,} = v30);
v26++;

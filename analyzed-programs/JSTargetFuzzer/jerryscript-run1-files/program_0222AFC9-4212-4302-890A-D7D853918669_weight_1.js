const v2 = new Int16Array(6);
const v5 = new Uint8Array(4096);
const o7 = {
    __proto__: v5,
    "c": Uint8Array,
    "h": 4096,
    [Int16Array]: v5,
};
const v9 = new Int32Array(2252);
v2[2252] = 6;
v5.byteLength = 2252;
o7[10] /= 1000;
const v11 = v9[6];
try { v11(Int32Array); } catch (e) {}
new Float32Array(1000);
new Uint32Array(6);
const v20 = new BigInt64Array(29);
new Uint8ClampedArray(7);
new Int32Array(256);
const v28 = v5.__proto__;
let v29;
try { v29 = v28.o(Int32Array); } catch (e) {}
[v20,Float32Array,[v29,[v29,v29,7,Int16Array]]];
new BigInt64Array(5);
const o36 = {
    "g": 10,
};
Object.defineProperty(o36, "g", { enumerable: true, value: 9 });

new Uint8Array(128);
const v8 = new Float32Array(7);
let v10 = Int8Array;
const v11 = new v10(11);
v8.byteOffset = 7;
const o12 = {
    __proto__: v11,
    1: Float32Array,
    "g": v10,
    "a": 194773034,
};
let v13;
try { v13 = o12(); } catch (e) {}
v10 = v13;
-12 && v13;

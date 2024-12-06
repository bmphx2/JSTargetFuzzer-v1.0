const v5 = new Uint8ClampedArray(512);
const v8 = new Int8Array(5);
const v11 = new Float64Array(512);
v11.byteLength = 8;
let v12;
try { v12 = v8.entries(); } catch (e) {}
const o13 = {
    ...v12,
    [512]: Uint8ClampedArray,
    [v5]: -165960805,
    ...v8,
    __proto__: v8,
};

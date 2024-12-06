function f0() {
}
new Int32Array(64);
const v9 = new Int16Array(3442);
new Uint8ClampedArray(1351);
new f0(1351, 1351, Uint8ClampedArray, Int32Array, ...v9);
new Int8Array(256);
new BigInt64Array(512);
new Uint8Array(3);
const v28 = new Array(9);
const v31 = new Uint32Array(2334);
new Uint32Array(4);
new Int16Array(129);
const v41 = `
    Uint32Array >= Uint32Array;
    let v43;
    try { v43 = v31.join(v41); } catch (e) {}
    v28[v43];
`;
eval(v41);

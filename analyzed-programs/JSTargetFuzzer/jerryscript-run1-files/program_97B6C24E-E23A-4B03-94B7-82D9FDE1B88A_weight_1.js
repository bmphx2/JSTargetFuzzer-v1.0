const v5 = new Float32Array(7);
new Uint32Array(1);
const v11 = new Int8Array(64);
try {
    try { v5.some(Array, 8); } catch (e) {}
} finally {
    v11.byteLength;
}
const v19 = new Array(9);
const v22 = new Uint32Array(2334);
new Uint32Array(4);
new Int16Array(8);
const v32 = `
    Uint32Array >= Uint32Array;
    let v34;
    try { v34 = v22.join(v32); } catch (e) {}
    v19[v34];
`;
eval(v32);

const v2 = new BigInt64Array(16);
new BigInt64Array(1);
new Uint8Array(2061);
const v17 = new Array(v2);
const v20 = new Uint32Array(2334);
new Uint32Array(4);
new Int16Array(129);
const v30 = `
    Uint32Array >= Uint32Array;
    let v32;
    try { v32 = v20.join(v30); } catch (e) {}
    v17[v32];
`;
eval(v30);

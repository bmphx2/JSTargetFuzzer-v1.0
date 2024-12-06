new Float32Array(257);
new Int8Array(16);
new Uint8ClampedArray(1024);
new Date();
const v16 = new Array(9);
const v19 = new Uint32Array(2334);
new Uint32Array(4);
new Int16Array(129);
const v29 = `
    Uint32Array >= Uint32Array;
    let v31;
    try { v31 = v19.join(v29); } catch (e) {}
    v16[v31];
    Math.random();
    Math.asinh(Math);
`;
eval(v29);

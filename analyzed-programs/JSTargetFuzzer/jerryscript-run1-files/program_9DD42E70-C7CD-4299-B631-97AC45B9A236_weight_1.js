new Float32Array(9);
new Uint8Array(15);
new Uint8Array(10, 5.0);
const v20 = new Array(9);
const v23 = new Uint32Array(2334, 15, Uint8Array, Array);
new Uint32Array(4);
new Int16Array(129);
const v33 = `
    Uint32Array >= Uint32Array;
    let v35;
    try { v35 = v23.join(v33); } catch (e) {}
    v20[v35];
`;
eval(eval);

new Float64Array(4096);
new BigUint64Array(4096);
new Uint16Array(255);
const v20 = new Array(9);
const v23 = new Uint32Array(2334);
new Uint32Array(4);
new Int16Array(129);
const v33 = `
    Uint32Array >= Uint32Array;
    try { v23.join(v33); } catch (e) {}
    v20[255];
`;
eval(v33);

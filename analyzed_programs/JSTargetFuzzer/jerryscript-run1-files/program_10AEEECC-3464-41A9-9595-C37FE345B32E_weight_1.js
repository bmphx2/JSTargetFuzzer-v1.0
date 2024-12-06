const v0 = [];
new Uint32Array();
new Int32Array(4);
const v8 = new BigInt64Array(2);
new Float32Array(2);
const v17 = new Array(9);
const v20 = new Uint32Array(2334);
new Uint32Array(4);
new Int16Array(129);
const v30 = `
    v8.length = 255;
    new BigInt64Array(v0, 4, 255);
    Uint32Array >= Uint32Array;
    let v36;
    try { v36 = v20.join(v30); } catch (e) {}
    v17[v36];
`;
eval(v30);

new Array(64);
new Int8Array(1000);
new Int8Array(188);
new Uint8Array(1819);
const v20 = new Array(1000);
new Uint32Array(188);
const v26 = new Uint32Array(4);
new Int16Array(129);
const v33 = `
    Uint32Array >= Uint32Array;
    let v35;
    try { v35 = v26.join(v33); } catch (e) {}
    v20[v35];
`;
eval(v33);

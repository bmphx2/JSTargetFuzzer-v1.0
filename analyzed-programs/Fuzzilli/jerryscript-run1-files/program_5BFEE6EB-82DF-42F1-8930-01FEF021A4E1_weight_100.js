new Int8Array(64);
new BigUint64Array(128);
const v11 = new Int8Array(3667);
v11[9] = BigUint64Array;
const v15 = v11.buffer;
const v16 = `
    v11[8] = 128;
    v15.maxByteLength *= 128;
    v11[Symbol.search];
`;
eval(v16);

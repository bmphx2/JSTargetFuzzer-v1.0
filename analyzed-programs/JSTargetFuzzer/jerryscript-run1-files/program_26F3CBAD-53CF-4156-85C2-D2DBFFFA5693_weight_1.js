const v5 = new Uint32Array(5);
new BigUint64Array(3);
new Uint16Array(1);
const v13 = Symbol.unscopables;
v5[v13] = v13;
const v14 = `
    const o17 = {
        "maxByteLength": 64,
    };
    const v19 = new SharedArrayBuffer(64, o17);
    new DataView(v19);
`;
eval(v14);

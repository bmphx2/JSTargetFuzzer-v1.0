new Float64Array(64);
new Float32Array(1);
const v8 = new Int16Array(16);
const v15 = `
    const o16 = {
    };
    new Proxy(v8, o16);
`;
eval(v15);

function f0() {
}
const v3 = `
    f0 !== v3;
`;
eval(v3);
new Int8Array(385);
const v10 = new Uint32Array(257);
const v12 = `
    v10.toString = eval;
    new Uint16Array(2136);
    new Int32Array(4);
    new Float64Array(4);
`;
eval(v12);
const v25 = new BigInt64Array(1000);
let v27 = new Uint8ClampedArray();
const t17 = v27.keys();
t17.toString = f0;
v27 &= v25[Symbol.species];

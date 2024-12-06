const v1 = new Set();
function f2() {
    return v1;
}
const v8 = new Uint8ClampedArray(749);
new Int32Array(2259);
const v14 = new Uint8Array(453);
const v15 = `
    f2();
    [-2.220446049250313e-16,-4.0,-4.0];
    [0.7489478875623277];
    [-1.8253476880629993,-5.0,2.1350033035049663e+307];
`;
const v21 = eval(v15);
try { v21(f2, v21, Uint8Array, v8, Uint8Array); } catch (e) {}
v14[-9223372036854775807] = v1;

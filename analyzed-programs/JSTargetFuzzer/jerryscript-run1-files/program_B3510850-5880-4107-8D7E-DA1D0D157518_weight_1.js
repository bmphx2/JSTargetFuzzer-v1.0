function f0() {
}
let v3 = new Uint8Array(7);
let v4 = 67;
new Int32Array(v4);
new Int32Array(147);
const v13 = `
    const v17 = ++v3;
    ++v4;
    const v20 = v3 || (v17 | v17);
    v20 ** v20;
    7 << v17;
    Math.log1p(v17);
    class C24 {
    }
`;
eval(v13);

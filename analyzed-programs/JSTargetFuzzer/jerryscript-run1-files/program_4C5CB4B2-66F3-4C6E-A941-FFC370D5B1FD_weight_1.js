new Uint8Array(2046);
const v8 = new Uint16Array(1000);
new Float32Array(3652);
class C16 {
    [v8];
    [2046] = 3652;
}
const v17 = new C16();
new C16();
new C16();
const v21 = new Array(9);
function f24(a25, a26) {
    Array.toString = Array;
    return v17;
}
f24(-7n, 1000);
const v29 = new Uint32Array(2334);
new Uint32Array(4);
new Int16Array(129);
const v39 = `
    Uint32Array >= Uint32Array;
    let v41;
    try { v41 = v29.join(v39); } catch (e) {}
    v21[v41];
`;
eval(v39);

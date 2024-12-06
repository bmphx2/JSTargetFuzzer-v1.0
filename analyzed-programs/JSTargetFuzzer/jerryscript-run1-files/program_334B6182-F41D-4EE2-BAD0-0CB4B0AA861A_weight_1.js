[];
new Int8Array(240);
new Uint16Array(4);
new Uint8ClampedArray(6);
class C18 {
    6 = -1073741824n;
}
new BigUint64Array(3245);
const v26 = new Array(9);
const v29 = new Uint32Array(2334);
new Uint32Array(4);
new Int16Array(129);
const v39 = `
    Uint32Array >= Uint32Array;
    let v41;
    try { v41 = v29.join(v39); } catch (e) {}
    v26[v41];
`;
eval(v39);

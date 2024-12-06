const v2 = new Float64Array(10);
v2.buffer;
[] = v2;
try { v2.subarray(); } catch (e) {}
let v10 = -128 << 4393;
const v11 = v10++;
Math.max(v10);
Math.floor(v11);
new Uint8ClampedArray(7);
new Uint16Array(2);
for (let v24 = 0; v24 < 32; v24++) {
    const t11 = "object";
    t11["p" + v24] = v24;
}
const v35 = new Array(9);
const v38 = new Uint32Array(2334);
new Uint32Array(4);
new Int16Array(129);
const v46 = new Uint8Array();
const v48 = Symbol.toPrimitive;
v48 != v46;
Symbol.keyFor(v48);
const v54 = `
    Uint32Array >= Uint32Array;
    let v56;
    try { v56 = v38.join(v54); } catch (e) {}
    v35[v56];
`;
eval(v54);

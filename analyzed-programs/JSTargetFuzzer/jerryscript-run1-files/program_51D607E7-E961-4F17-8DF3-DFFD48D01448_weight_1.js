const v3 = [1.7976931348623157e+308];
const v4 = [-1000.0,-Infinity,-3.0];
function* f5(a6, a7) {
    yield* v4;
    return a7;
}
const v8 = f5(v3, v3);
const v11 = v4["splice"](...[8,0,4294967297,-33048,6,1000,983207413], ...v8);
new Int8Array(v11);
new Uint8ClampedArray(v11);
new Uint16Array(1);
const v25 = new Uint8Array();
const v28 = Math.sign(9);
try { v25.set(v25, v28); } catch (e) {}

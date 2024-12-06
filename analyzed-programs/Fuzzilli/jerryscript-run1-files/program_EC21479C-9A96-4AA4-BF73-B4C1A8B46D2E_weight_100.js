let v1 = Uint8Array;
let v2 = new v1(2520);
const v5 = new Uint8Array(10);
let v8 = new Float32Array(2060);
for (let v12 = 0; v12 < 32; v12++) {
    v5["p" + v12] = v12;
}
for (let [...v15] of v5) {
    const v16 = new Float32Array(v15, 2520, v15);
    [v1,v8,v2] = v16;
}
try { v5.indexOf(v2, 2520); } catch (e) {}

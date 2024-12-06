const v2 = new Uint32Array(64);
const v5 = new Uint8ClampedArray(80);
const v8 = new Float64Array(2);
let v9 = [v2,Uint32Array,v5,v8];
const v10 = [80,80];
const v11 = [Uint8ClampedArray,v8,2,64,v10];
v9 >>>= v9;
for (const v12 in v11) {
    const o13 = {
    };
    new Proxy(v10, o13);
}
const v17 = v2["values"]();
try { v17(v10, 80); } catch (e) {}

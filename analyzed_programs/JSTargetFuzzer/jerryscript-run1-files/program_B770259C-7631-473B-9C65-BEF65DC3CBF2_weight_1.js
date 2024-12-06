function f0() {
}
new Float64Array(3);
new Int32Array(6);
new Float64Array(207);
const v13 = [8,Float64Array,10,10];
[f0,v13];
[207];
Object.defineProperty(v13, -14, { enumerable: true, get: f0 });
let v19 = 0;
while (v19 < 5) {
    for (let v22 = 0; v22 < 32; v22++) {
        v13["p" + v22] = v22;
    }
    v19++;
}

const v2 = new Float32Array(4096);
const v5 = new Float32Array(0);
const v8 = new BigUint64Array(8);
[v2,v8,BigUint64Array,4096];
[v2,[4096,Float32Array,v2],Float32Array,v5];
try {
const t0 = 4096;
t0();
} catch (e) {}
let v13 = 10;
for (; v13--;) {
    with (v8) {
        v8.byteLength = 4096;
    }
    break;
}

const v1 = new Map();
function f5(a6) {
    const o7 = {
        "a": 8,
        __proto__: v1,
        "e": a6,
        "b": -1073741824,
        157: a6,
        [3]: a6,
        [-1073741824]: -1073741824,
        "c": Map,
        "d": v1,
        "h": a6,
        ...v1,
        "g": 3,
        "f": f5,
    };
    return o7;
}
f5(-1073741824);
f5(3);
f5(-1073741824);
const v19 = new Float32Array(4096);
new Float32Array(0);
const v25 = new BigUint64Array(8);
[v19,v25,BigUint64Array,4096];
[v19,[4096,Float32Array,v19],Float32Array,v1];
try {
const t0 = 4096;
t0();
} catch (e) {}
let v30 = 10;
for (; v30--;) {
    with (v25) {
        v25.byteLength = 4096;
    }
    break;
}

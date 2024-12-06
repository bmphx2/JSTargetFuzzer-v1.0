const v1 = new Set();
function f2() {
    return v1;
}
v1[Set] = Set;
const v4 = [f2];
const v5 = v1.delete;
Reflect.apply(v5, v1, v4);
function f9(a10, a11) {
    const o12 = {
        "e": a10,
        "a": a11,
    };
    return o12;
}
f9(f9(16, v5), f9);
f9(16, Int32Array);
new Int32Array(16);
new Uint8ClampedArray(9);
new Int32Array(129);
async function f23(a24, a25, a26) {
    JSON.parse(JSON);
    return f23;
}
f23(f23, f23, f23);

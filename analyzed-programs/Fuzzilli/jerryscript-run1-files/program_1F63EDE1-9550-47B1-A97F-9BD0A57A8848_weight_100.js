const v2 = new Float64Array(5);
const v5 = new Float64Array(3437);
const v8 = new Int8Array(133);
function f9() {
    return v8;
}
for (const v13 in v8) {
    const v14 = v8[v13];
    Object.defineProperty(v8, "a", { writable: true, enumerable: true, get: f9 });
    let v15;
    try { v15 = v14(v14, Float64Array, 129); } catch (e) {}
    ++v15;
}
v8.__proto__ = v8;
v5[129];
Float64Array - v2;
v5[60];

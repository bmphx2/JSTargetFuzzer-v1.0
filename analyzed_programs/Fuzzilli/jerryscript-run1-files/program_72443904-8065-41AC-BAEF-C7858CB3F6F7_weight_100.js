new Uint8Array(1000);
const v5 = new Int32Array(2678);
const v8 = new Int32Array(5);
function f9() {
    return 1000;
}
function f10(a11, a12) {
    const o19 = {
        "e": a11,
        "a": v8,
        set g(a14) {
            Object.defineProperty(this, "c", { writable: true, set: f9 });
            super.g = Int32Array;
            try { a11.filter(a11, -38079n, 9n); } catch (e) {}
            v5[6] = 1000;
        },
        ...v5,
        "b": a11,
        "f": 5,
    };
    return o19;
}
const v20 = f10(Uint8Array, 5);
f10(Int32Array, 5);
f10(v20, 1000);
v20[2678] = v5;
v8.__proto__ = v8;
for (const v24 of v5) {
    const v26 = v24 >>> isFinite;
    new f10(v26, v24, f9, v26, f10);
    v20[Symbol.split] = 5;
}

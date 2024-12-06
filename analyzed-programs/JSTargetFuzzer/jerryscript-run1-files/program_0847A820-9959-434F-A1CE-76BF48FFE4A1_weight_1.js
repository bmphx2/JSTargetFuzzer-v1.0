function f0() {
}
function f7(a8, a9) {
    const o24 = {
        n(a11, a12) {
            Object.defineProperty(a12, a12, { enumerable: true, get: f0 });
            const o15 = {
                "maxByteLength": a9,
            };
            const v17 = new SharedArrayBuffer(-32936n, o15);
            new Int32Array(v17);
            return 1;
        },
        "a": a8,
        "g": a9,
        get h() {
            const o21 = {
                "call": f0,
                "construct": f0,
                "get": f0,
                "preventExtensions": f0,
            };
            new Proxy(this, o21);
            return a8;
        },
        __proto__: a8,
    };
    return o24;
}
f7(1896378555n, -1n);
f7(f7(f0, 1896378555n), -32936n);
const v32 = new Float32Array();
v32.reverse();

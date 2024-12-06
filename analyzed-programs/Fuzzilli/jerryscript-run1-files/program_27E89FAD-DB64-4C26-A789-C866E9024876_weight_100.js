function f0() {
    const o18 = {
        [-1073741824]: "symbol",
        ..."symbol",
        valueOf(a5, a6) {
            const v7 = "symbol" !== a6;
            let v8;
            try { v8 = a5.o(-5, v7, -1073741824, "symbol", v7); } catch (e) {}
            v8.toString = v8;
            new Uint8ClampedArray(1000);
            new Uint32Array(128);
            new Uint8Array(2);
            return "symbol";
        },
    };
    return o18;
}
const v19 = f0();
f0();
f0();
new Int16Array(2401);
new Uint8ClampedArray(1077);
new Float32Array(7);
new Uint32Array(10);
new Int32Array(4);
new Uint16Array(3);
Object.defineProperty(v19, -1, { writable: true, configurable: true, get: f0 });

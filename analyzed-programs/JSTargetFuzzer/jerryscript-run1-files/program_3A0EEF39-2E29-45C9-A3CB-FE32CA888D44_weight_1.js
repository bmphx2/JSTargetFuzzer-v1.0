function f0() {
}
class C1 extends f0 {
    static n() {
        try { this.valueOf(f0); } catch (e) {}
        const o6 = {
            "maxByteLength": 3391420686,
        };
        const v8 = new SharedArrayBuffer(7, o6);
        const v10 = new Uint32Array(v8);
        C1[v10] = f0;
        Object.defineProperty(v8, Uint32Array, { writable: true, configurable: true, enumerable: true, set: f0 });
        return f0;
    }
}
const v14 = new C1();
new C1();
new C1();
new WeakSet();
new Int8Array(6);
new Float64Array(6);
const o26 = {
};
const v28 = new Proxy(C1, o26);
v14.__proto__ = v28;
new Uint8Array(237);
function f31(a32, a33, a34) {
    'use strict';
    let v35 = !a34;
    --v35;
    return a32;
}
f31(f31, f31, f31);

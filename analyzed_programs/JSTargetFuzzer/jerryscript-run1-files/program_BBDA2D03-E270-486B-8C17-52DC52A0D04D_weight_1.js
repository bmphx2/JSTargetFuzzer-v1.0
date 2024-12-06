function f0() {
    const o8 = {
        5: 128,
        [-1000000.0]: -1000000.0,
        get d() {
            function f5(a6) {
                return a6;
            }
            class C7 extends f5 {
                static [-2] = C7;
                static d = f5;
            }
            return 128;
        },
        [4096]: -1000000.0,
        __proto__: 4096,
        "a": 128,
    };
    return o8;
}
const v9 = f0();
f0();
Object.defineProperty(f0(), "h", { writable: true, value: f0 });
for (let v14 = 0; v14 < 32; v14++) {
    v9["p" + v14] = v14;
}
new BigUint64Array(3);
new Int16Array(4096);
new Uint32Array(2827);
new Float32Array(6);
new Uint8Array(6);
new Uint32Array(250);
class C34 {
    constructor(a36) {
        ("getOwnPropertyDescriptor").match(a36);
    }
}
const v38 = new C34();
new C34(v38);

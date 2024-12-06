function f0() {
}
class C1 {
    constructor() {
        let v2 = this;
        v2--;
        9 || 9;
        ~v2;
    }
    [f0] = f0;
    static 7 = f0;
}
new C1();
const v10 = new C1();
new C1(v10, f0);
const v20 = new Int32Array(2083);
new Uint8Array(255);
const v26 = new Int16Array(7);
function f27(a28, a29, a30) {
    const o37 = {
        "flags": Int32Array,
        set d(a32) {
            e = a29;
            [a30,a29];
            [v20];
            [Int16Array,Uint8Array];
            this.h;
        },
        "h": v20,
        65536: a30,
        64: a30,
        "c": C1,
        "e": Int32Array,
        __proto__: v26,
        "b": Uint8Array,
        "c": 255,
        ...a28,
        1053877365: a29,
    };
    return o37;
}
const v38 = f27(2083, 255, 7);
const v39 = f27(v38, 7, 2083);
f27(f27, 255, 7);
v38[-2] &= 2083;
v26[-1] -= 7;
let v41 = 10;
for (; v41--;) {
    v39.h;
    v39[Symbol.toPrimitive] = 7;
}

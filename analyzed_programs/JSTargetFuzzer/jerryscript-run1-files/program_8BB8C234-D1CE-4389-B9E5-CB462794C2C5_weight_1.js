class C9 {
    p(a11, a12, a13, a14) {
        const o15 = {
        };
        new Proxy("R", o15);
        return a14;
    }
    constructor(a19, a20, a21, a22) {
        for (let i24 = 0; i24 < 3; i24++) {
            try { a22(); } catch (e) {}
        }
    }
}
const v34 = new C9(36212, 536870912, "number", "number");
new C9(536870912, 65536, "number", 536870912);
new C9(65536, -12, "number", 65536);
const v39 = new Int32Array(2083);
new Uint8Array(255);
const v45 = new Int16Array(7);
function f46(a47, a48, a49) {
    const o56 = {
        "h": Int32Array,
        set e(a51) {
            e = a48;
            [a49,a48];
            [v39];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v45,
        "b": Uint8Array,
        "c": 255,
        ...a47,
        1053877365: a48,
    };
    return o56;
}
const v57 = f46(2083, 255, 7);
const v58 = f46(v57, 7, 2083);
f46(f46, 255, 7);
v57[-2] &= 2083;
v45[-1] -= 7;
let v60 = 10;
for (; v60--;) {
    const v65 = v58.h;
    function f67(a68, a69, a70) {
        const t46 = "R";
        t46.toString = v65;
        try { a68(a69, a70); } catch (e) {}
        return a69;
    }
    f67(Uint8Array, 7, v34);
    v58[Symbol.toPrimitive] = 7;
}

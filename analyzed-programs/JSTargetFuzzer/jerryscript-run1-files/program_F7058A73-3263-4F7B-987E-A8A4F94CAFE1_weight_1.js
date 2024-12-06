[];
new Date();
const v14 = new Int32Array(2083);
new Uint8Array(255);
const v20 = new Int16Array(7);
function f21(a22, a23, a24) {
    const o31 = {
        ...Date,
        "b": 2083,
        ...v14,
        "f": Uint8Array,
        ...v20,
        "h": Int32Array,
        set e(a26) {
            e = a23;
            [a24,a23];
            [v14];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v20,
        "b": Uint8Array,
        "c": 255,
        ...a22,
        1053877365: a23,
    };
    return o31;
}
const v32 = f21(2083, 255, 7);
const v33 = f21(v32, 7, 2083);
f21(f21, 255, 7);
v32[-2] &= 2083;
v20[-1] -= 7;
let v35 = 10;
for (; v35--;) {
    const v40 = v33.h;
    function F42(a44, a45) {
        if (!new.target) { throw 'must be called with new'; }
        this.f = v20;
        this.b = v14;
        this.h = a45;
    }
    const v46 = new F42(2083, v40);
    new F42(v40, v40);
    new F42(2083, v46);
    v33[Symbol.toPrimitive] = 7;
}

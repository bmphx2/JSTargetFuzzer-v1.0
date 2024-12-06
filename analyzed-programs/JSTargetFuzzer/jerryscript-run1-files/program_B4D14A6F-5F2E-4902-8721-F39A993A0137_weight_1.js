const v1 = new WeakMap();
function f2(a3) {
    const o12 = {
        [v1](a5) {
            super.h = this;
            function f6(a7) {
                const o8 = {
                    "a": a7,
                    ...a7,
                    __proto__: a3,
                };
                return o8;
            }
            f6(this);
            f6(f6(a3));
            return v1;
        },
    };
    return o12;
}
const v13 = f2(v1);
const v14 = f2(f2);
f2(v13);
[[v13,WeakMap,["setDate",v1,"setDate","allSettled",WeakMap]],v14,"setDate",v13];
new Int32Array(2083);
new Uint8Array(255);
const v30 = new Int16Array(2083);
function f31(a32, a33, a34) {
    const o41 = {
        "h": Int32Array,
        set e(a36) {
            e = a33;
            [a34,a33];
            [a36];
            [Int16Array,Uint8Array];
            this.sticky;
        },
        __proto__: v30,
        "b": Uint8Array,
        "asyncIterator": 255,
        ...a32,
        1053877365: a33,
    };
    return o41;
}
const v43 = f31(f31(2083, 255, 7), 7, 2083);
const t46 = f31(f31, 255, 7);
t46[-2] &= 2083;
v30[-1] -= 7;
let v45 = 10;
for (; v45--;) {
    v43.h;
    v43[Symbol.toPrimitive] = 7;
}

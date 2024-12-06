function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -899991280;
    this.g = -899991280;
    this.c = -899991280;
}
let v3 = new F0();
let v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o26 = {
        1073741824: a8,
        __proto__: a8,
        m(a10, a11, a12, a13) {
            v4 *= v4;
            this[7] = a11;
            v3 = a10;
            const v16 = Symbol.iterator;
            const o25 = {
                [v16]() {
                    let v18 = 10;
                    const o24 = {
                        next() {
                            v18--;
                            const v22 = v18 == 0;
                            const o23 = {
                                "done": v22,
                                "value": v18,
                            };
                            return o23;
                        },
                    };
                    return o24;
                },
            };
            return a11;
        },
    };
    return o26;
}
const v27 = f6(v4, v4);
const v29 = f6(f6(v5, v4), v3);
function f33(a34, a35, a36, a37) {
    const o47 = {
        ...a35,
        "b": a35,
        "e": v29,
        "g": v27,
        "c": a37,
        5: a36,
        "e": a36,
        [F0](a39, a40, a41, a42) {
            const v43 = v3[268435439];
            try { SharedArrayBuffer.setPrototypeOf(v43, v27, a35, 985857066, a34); } catch (e) {}
            return this;
        },
    };
    return o47;
}
f33(v29, f33(v27, 985857066, 985857066, f33(v4, 985857066, v4, -268435456)), 985857066, v3);
new WeakSet();
new Uint8ClampedArray(127);
const v58 = new Int8Array(2);
new BigInt64Array(949);
const v62 = [0.4605528930870273,776998.357793648,782.0357441027786,880.884726728709];
[-2.0,-1.601440531771923e+308,-1.0,-3.077642219695236e+307,1.0];
[5.0];
v58 && Uint8ClampedArray;
const v69 = (a70, a71, a72, a73) => {
    v62[3333619286] >>= a72 == 127 ? a72 : 127;
    return a72;
};
v62[1940699178];
v58.toString = v69;
new Uint8ClampedArray(75);
new Float32Array(2);
new Int8Array(127);

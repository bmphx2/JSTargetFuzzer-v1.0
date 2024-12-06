const v1 = new Set();
function f2(a3, a4) {
    const o19 = {
        [a4](a6, a7) {
            const v9 = Symbol.iterator;
            const o18 = {
                [v9]() {
                    let v11 = 10;
                    const o17 = {
                        next() {
                            v11--;
                            const v15 = v11 == 0;
                            const o16 = {
                                "done": v15,
                                "value": v11,
                            };
                            return o16;
                        },
                    };
                    return o17;
                },
            };
            return o18;
        },
    };
    return o19;
}
const v21 = f2(v1, f2(v1, f2));
const v22 = f2(f2, v1);
const v26 = [963514622,963514622,v21];
const v27 = [-65158,f2,v21,v22,v22];
const v28 = [v27,v22,v26,-65158];
d = delete v28[1];
new BigUint64Array(1);
new Uint32Array(16);
new Uint32Array(16);
function F39(a41, a42, a43, a44) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v21;
}
new F39(v28, -65158, 963514622, v27);
new F39(v28, 963514622, -2, v27);
new F39(v26, -2, -65158, v26);
const v55 = new Set();
class C59 {
    6 = -1073741824n;
    set e(a61) {
        try {
            super.toString(-1073741824n, 12);
        } catch(e63) {
        }
    }
    static 3;
    m(a65, a66, a67) {
        a67 *= 2023143923n;
        v55[268435439] <<= -1550667973;
        new Float32Array(0);
        for (let [i75, i76] = (() => {
                for (let v73 = 0; v73 < 5; v73++) {
                }
                return [0, 10];
            })();
            i75 < i76;
            (() => {
                const o80 = {
                };
                i75++;
            })()) {
        }
        new Float32Array(9);
        new Int32Array(1000);
        return 0;
    }
}
new C59();
new C59();
new C59();
const v93 = new Int8Array();
v93.reverse();
const v97 = new Int32Array(2083);
new Uint8Array(255);
const v103 = new Int16Array(7);
function f104(a105, a106, a107) {
    const o124 = {
        "h": Int32Array,
        set e(a109) {
            e = a106;
            [a107,a106];
            [v97];
            [Int16Array,a109];
            const v115 = new Int16Array(2083, 2083);
            function f116(a117, a118, a119) {
                const o120 = {
                    __proto__: v115,
                    ...a117,
                    1053877365: a118,
                };
                return o120;
            }
            f116(f116());
            this.h;
        },
        __proto__: v103,
        "b": Uint8Array,
        "c": 255,
        ...a105,
        [Int16Array]: a106,
        [2083]: 12,
        "f": a107,
        "e": v97,
        ...C59,
        1053877365: a106,
    };
    return o124;
}
const v125 = f104(2083, 255, 7);
const v126 = f104(v125, 7, 2083);
f104(f104, 255, 7);
v125[-2] &= 2083;
v103[-1] -= 7;
let v128 = 10;
for (; v128--;) {
    v126.h;
    v126[Symbol.toPrimitive] = 7;
}

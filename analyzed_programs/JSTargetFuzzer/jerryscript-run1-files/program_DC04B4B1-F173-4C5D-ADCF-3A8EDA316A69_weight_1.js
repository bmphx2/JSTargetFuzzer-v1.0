function f0() {
}
function f1() {
    const o21 = {
        "size": f1,
        __proto__: f0,
        toString() {
            Object.defineProperty(this, -2, { writable: true, configurable: true, set: f0 });
            const v4 = Symbol.iterator;
            const o20 = {
                [v4]() {
                    let v6 = 10;
                    const o19 = {
                        next() {
                            const v11 = new BigInt64Array(10);
                            v11["lastIndexOf"](1e-15, [0.031158032500497646], this, Symbol);
                            v6--;
                            const v17 = v6 == 0;
                            const o18 = {
                                "done": v17,
                                "value": v6,
                            };
                            return o18;
                        },
                    };
                    return f0;
                },
            };
            return o20;
        },
    };
    return o21;
}
const v22 = f1();
let v24 = -9007199254740991n;
v24 <<= 6n;
class C26 {
    constructor(a28) {
        a28 ^ a28;
    }
}
new C26(1464214017n);
const v32 = f1(f1, v22, f1());
function F33(a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = f0;
    this.h = f1;
    Promise.reject();
    (-2n) ** 36564n;
}
const v41 = new F33(v32);
new F33(v41);
const v43 = new F33(v32, v32);
new Uint8Array(1024);
const o52 = {
    "maxByteLength": 4096,
};
const v54 = new ArrayBuffer(4096, o52);
const v56 = new Uint32Array(v54);
new Uint16Array(1);
new Float32Array(v56);
new C26(2634);
const v66 = new Date();
v66.getUTCFullYear();
new Date("14", v43, "14");
const v72 = new Uint8ClampedArray(2634);
const v75 = new Uint32Array(3769);
function f76(a77, a78, a79, a80) {
    const o81 = {
        ...v75,
        ...v72,
    };
    return o81;
}
const v82 = f76(Uint32Array, 2634, 3769, v75, v43, Uint32Array, 2634);
f76(v82, v82, v82, Uint8ClampedArray);
f76();

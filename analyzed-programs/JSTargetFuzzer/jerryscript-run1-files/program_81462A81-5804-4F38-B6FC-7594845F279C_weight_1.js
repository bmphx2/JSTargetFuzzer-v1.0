function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -9223372036854775808;
    this.f = -9223372036854775808;
    this.g = -9223372036854775808;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function f9(a10, a11, a12) {
    const o32 = {
        [a11]: Infinity,
        "g": v3,
        "f": v4,
        set g(a14) {
            try { a14(); } catch (e) {}
            512 / a14;
        },
        set b(a19) {
            new BigUint64Array(1024);
            new Float32Array(2);
            new Int16Array(10);
        },
    };
    return o32;
}
f9(-919.5434757329247, Infinity, 3.0);
const v35 = new Uint8ClampedArray();
v35.includes(Infinity);
const v38 = Function();
f9(Infinity, -919.5434757329247, 3.0);
f9(3.0, -919.5434757329247, -919.5434757329247);
const v41 = [422352.04010882555,2.2250738585072014e-308,1.1629717757292213e+308];
[1000000000.0,0.0];
[807.9078496703482,Infinity,Infinity,815167.1126980064,4.0,2.220446049250313e-16,609859.1737089553,2.2250738585072014e-308,-2.0];
2083 + [];
new Boolean(256);
const v51 = new Int32Array(2083);
new Uint8Array(255);
const v57 = new Int16Array(7);
function f58(a59, a60, a61) {
    const o79 = {
        "h": Int32Array,
        set e(a63) {
            const v64 = [-2.3616640551925634e+307,0.02455573492666774];
            const o65 = {
            };
            new a63(v64, o65);
            -38776 + 536870887;
            e = a60;
            [a61,a60];
            [v51];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v57,
        "b": Uint8Array,
        "c": 255,
        ...v41,
        "e": v38,
        /*
        __proto__: 3.0,
        */
        next() {
            let v74 = this;
            v74--;
            const v77 = a61 == 0;
            const o78 = {
                "done": v77,
                "value": a61,
            };
            return o78;
        },
        ...a59,
        1053877365: a60,
    };
    return o79;
}
const v80 = f58(2083, 255, 7);
const v81 = f58(v80, 7, 2083);
f58(f58, 255, 7);
v80[-2] &= 2083;
v57[-1] -= 7;
let v83 = 10;
for (; v83--;) {
    v81.h;
    v81[Symbol.toPrimitive] = 7;
}

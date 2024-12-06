function f0() {
    const o8 = {
        __proto__: NaN,
        "c": -2.2250738585072014e-308,
        "a": NaN,
        ...NaN,
        ...NaN,
        set d(a5) {
            let v4 = this;
            for (const v6 in v4) {
                super.h = v4;
                v4[32] = v4;
                v4 = f0;
            }
            v4 << a5;
        },
        2561149426: 1e-15,
    };
    return o8;
}
f0();
f0();
f0();
new WeakSet();
[0.9812342775248292,1.440571879954806e+308,-29.79908947904721,0.33263682114800996,0.0,-4.608034284663766e+307,-5.634219704088263];
[-Infinity,5.0,984.9948295509957,1000000.0,-3.526649549918841,-7.577178929128305,-5.379044482342097];
[-1.0491686029879532e+308,-Infinity,1000.0,-1000000000.0,-2.367592566482832e+307];
function f23() {
}
function f24() {
    const o30 = {
        get g() {
            new f23();
            return f23;
        },
        "h": f23,
        ...f24,
        "g": f23,
        "a": f23,
        ...f23,
    };
    return o30;
}
f24();
const v32 = f24();
f24();
let v36 = Int32Array;
let v37 = new v36(4096);
new Uint32Array(129);
let v43 = new Int16Array(512);
[,v36,v43,v37] = v43;
v32.g += 4096;
const v45 = Symbol.iterator;
const o54 = {
    [v45]() {
        let v47 = 10;
        const o53 = {
            next() {
                v47--;
                const v51 = v47 == 0;
                const o52 = {
                    "done": v51,
                    "value": v47,
                };
                return o52;
            },
        };
        return o53;
    },
};

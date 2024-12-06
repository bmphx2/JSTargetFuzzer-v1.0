const v0 = [18091,-30211,3,496678161,268435440,-14,255,268435441,426466384,928521661];
const v1 = [-1321213020,-8];
const v2 = [2147483649,255,43122,-9223372036854775807,11,16];
function f3(a4, a5) {
    const o11 = {
        ...v1,
        "f": v2,
        ...a4,
        __proto__: a4,
        get b() {
            let v7;
            try { v7 = new this(this, a5, this); } catch (e) {}
            try { new v7(v1, v7, v7, v0, v7); } catch (e) {}
            v2.g = a5;
            const v9 = !v2;
            super.h = v1;
            return v9 / v0;
        },
    };
    return o11;
}
const v12 = f3(v1, v1);
const v13 = f3(v0, v0);
const v14 = `
    const v15 = new f3(f3, v14);
    v15.b;
`;
const v18 = eval(v14);
const v19 = f3(v1, v2);
const o21 = {
    "e": eval,
    "c": v12,
    __proto__: v1,
    "d": v13,
    ...v19,
    /*
    __proto__: v2,
    */
    "f": v2,
    "a": f3,
};
function f24() {
    return v19;
}
function f25(a26, a27, a28) {
    const o38 = {
        __proto__: v18,
        ...a27,
        ...v0,
        "b": a26,
        "a": a26,
        ...v2,
        "g": -4096,
        "c": v1,
        "d": 2,
        "e": a27,
        [a27](a30, a31, a32, a33) {
            [-1.0531572297255988e+308,-1000000.0,8.263846638455767,0.1361657063588857,1000000000.0,3.0,-7.288580591911515];
            [NaN,7.872710138379123,-1.4780777217707664e+308,-4.0,-572196.1020070205,1000000000.0,1.0];
            [-8.449933647848002,-2.0,4.0,9.529535071779934e+307,-3.0,-613701.5495171478,-0.036231171375955995,-1000.0,-1000.0];
            return this;
        },
        "e": v18,
        ...v12,
        "h": v0,
        ...o21,
        "f": a27,
        ...v1,
        p() {
            return this;
        },
        ...a26,
        "f": -4096,
        "a": f3,
    };
    return o38;
}
f25(f25(-9007199254740991, f25(v0, f25, -9007199254740991), -4096), v2, -9007199254740991);
const o43 = {
};
async function f45(a46, a47, a48) {
    new Int32Array(10);
    new BigUint64Array(2460);
    new Int16Array(128);
    new Int32Array(a46);
    return f45;
}
f45();
try { Math.min(1073741823n); } catch (e) {}
Reflect.apply(("e").endsWith, o43);

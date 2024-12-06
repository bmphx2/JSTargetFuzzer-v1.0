function f1() {
    const o17 = {
        "a": true,
        "d": true,
        set b(a3) {
            let v4;
            try { v4 = a3(); } catch (e) {}
            v4 / true;
        },
        [true]() {
            new BigUint64Array(1024);
            new Int8Array(2);
            new Uint16Array(1024);
            return 1024;
        },
    };
    return o17;
}
const v18 = f1();
const v19 = f1();
const v20 = f1();
function f24(a25, a26, a27, a28) {
    const o29 = {
        "h": f1,
        [-1]: v20,
        "d": v18,
        [v20]: a27,
        __proto__: a26,
        "f": v18,
        "c": a26,
        "b": a26,
        "a": a27,
        ...v19,
        "e": -11,
    };
    return o29;
}
f24(-11, v20, -11, v20);
f24(255, v18, -11, v19);
const v32 = f24(-2018144982, v20, -2018144982, v19);
v32[v32] <<= -2018144982;
function f33(a34) {
    return v32;
}
class C35 extends f33 {
    static 1 = f1;
    #b;
    d;
    #c;
}

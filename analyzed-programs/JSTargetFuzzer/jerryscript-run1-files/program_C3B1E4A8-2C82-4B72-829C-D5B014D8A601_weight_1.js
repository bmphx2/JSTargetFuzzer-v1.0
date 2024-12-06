function f0() {
}
function f1() {
    return f0;
}
function f2(a3, a4) {
    const o9 = {
        "e": f1,
        "b": f1,
        get d() {
            return f1;
        },
        "c": f0,
        __proto__: a4,
        "a": a3,
        65537: f1,
        "g": a4,
        "h": a3,
        [a3]: f0,
    };
    return o9;
}
f2(f1, f1);
f2(f1, f0);
f2(f2, f0);
[Infinity,-5.0,-8.32287194665036,204261.1817909733,-1000.0,-6.369076372410234,-3.0,3.39324853518599e+307,1000000.0];
[0.8308788364545556];
[-1000000000.0,3.34417892137157e+307];
new Uint8ClampedArray(256);
new Int16Array(2);
new Uint8ClampedArray(64);
const v25 = [-1.0,-0.0,255875.04019054095,1e-15];
const o26 = {
};
const v28 = new Proxy(v25, o26);
const o29 = {
    __proto__: v28,
};
Symbol(127);
Symbol.for();

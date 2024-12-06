function f0() {
    const o9 = {
        "d": "buffer",
        "a": f0,
        [7]: "buffer",
        ..."buffer",
        ..."source",
        "d": "source",
        set a(a5) {
        },
        __proto__: "buffer",
        ..."source",
        "f": "buffer",
        "h": 7,
    };
    return o9;
}
f0();
const v11 = f0();
const v12 = f0();
function f13(a14, a15) {
    const o16 = {
        [a15]: a15,
        "a": a15,
    };
    return o16;
}
const v17 = f13(v12, v11);
v12.h = f0;
f13(f0, f0);
f13(v12, v11);
f13(v11, v17);
const o25 = {
};
new Proxy(f0, o25);
v12[3460] = f0;
function f33(a34, a35) {
    /d/i.exec();
    return a35;
}
new Promise(f33);

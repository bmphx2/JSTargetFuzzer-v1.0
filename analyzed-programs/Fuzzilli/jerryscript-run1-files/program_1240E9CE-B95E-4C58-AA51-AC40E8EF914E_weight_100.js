function f3(a4, a5) {
    const o13 = {
        __proto__: a4,
        "d": a4,
        [a5]: 1073741823,
        p(a7, a8) {
            let v9;
            try { v9 = a8(1073741823); } catch (e) {}
            a5 += v9;
            const o10 = {
            };
            new Proxy(v9, o10);
            return a7;
        },
        "f": a5,
    };
    return o13;
}
const v14 = f3(4294967295, 1073741823);
f3(536870887, 1073741823);
f3(1073741823, 1073741823);
function F23(a25, a26, a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 1073741823;
    this.h = v14;
}
new F23(536870887, 1073741823, "asUintN", 4294967295);
const v30 = new F23(1073741823, 536870887, F23, 4294967295);
new F23(4294967295, 1073741823, v30, 1073741823);
const o34 = {
    "maxByteLength": 482,
};
const v36 = new SharedArrayBuffer(482, o34);
new Float64Array(v36);

function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -4096;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o12 = {
        __proto__: v4,
        "g": v4,
        set d(a10) {
            function f11() {
                return a8;
            }
            a8[a7] = a10;
        },
        "h": v3,
        "a": v4,
        "d": v3,
        "c": v3,
    };
    return o12;
}
const v13 = f6(v5, v4);
f6(v13, v13);
f6(v13, v4);
let v21 = -953365693;
[v21,f6] = "string";
function f22(a23, a24) {
    return 0;
}
let v28 = f22(F0, 1073741823);
v28 = 440217513;
for (let v29 = 0; v29 < 32; v29++) {
    v21["p" + v29] = v29;
}

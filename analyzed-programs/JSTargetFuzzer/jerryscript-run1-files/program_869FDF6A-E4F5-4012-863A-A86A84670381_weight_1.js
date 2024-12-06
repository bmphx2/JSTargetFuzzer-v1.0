function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = f0;
    this.d = f0;
    this.a = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function f9(a10, a11, a12, a13) {
    const o18 = {
        [a12]: a10,
        "g": -1925247380,
        set a(a15) {
            v5.d %= 583;
            try {
                super.split(F1);
            } catch(e17) {
            }
        },
        __proto__: a13,
        "e": 583,
    };
    return o18;
}
f9(v5, -1925247380, v3, v4);
const v20 = f9(v3, 583, v5, v3);
f9(v20, v20, v4, v5);
const v24 = new Uint16Array(16);
v24[5] = v24;

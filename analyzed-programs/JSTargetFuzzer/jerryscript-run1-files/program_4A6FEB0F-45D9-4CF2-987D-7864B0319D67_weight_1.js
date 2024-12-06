function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -2;
    this.d = a5;
}
const v6 = new F3(43812);
const v7 = new F3(43812);
const v8 = new F3(43812);
function f9(a10, a11) {
    const o16 = {
        __proto__: a10,
        get f() {
            const v13 = this[256];
            try { new v13(this); } catch (e) {}
            const t14 = 43812;
            delete t14[1];
            this.d = 43812;
            this.d *= 43812;
            return a11;
        },
        "c": -2,
        "g": f9,
    };
    return o16;
}
f9(v7, -2);
Promise.reject();
f9(v6, 256);
f9(v8, 256);
let v22 = 52621n;
-2.0 != [-1521134849,1024,-16633,19233,7,-9181,-128,-9007199254740991,0];
--v22;

function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -2;
    this.d = a5;
    const v7 = new Set();
    class C8 {
        constructor(a10) {
            try { a10(Set, Set, ...a10); } catch (e) {}
        }
    }
    new C8(v7);
}
const v13 = new F3(43812);
const v14 = new F3(-2);
const v15 = new F3(43812);
function f16(a17, a18) {
    const o23 = {
        __proto__: a17,
        get f() {
            const v20 = this[256];
            try { new v20(this); } catch (e) {}
            delete a18[1];
            this.d = 43812;
            this.d *= 43812;
            return a18;
        },
        "c": -2,
        "g": f16,
    };
    return o23;
}
f16(v14, -2);
Promise.reject();
f16(v13, 256);
f16(v15, 256);
let v29 = 52621n;
-2.0 != [-1521134849,1024,-16633,19233,7,-9181,-128,-9007199254740991,0];
--v29;

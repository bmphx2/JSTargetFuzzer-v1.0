class C3 {
    m(a5, a6) {
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            this.b = a6;
            this.c = a10;
            this.name = 1;
        }
        new F7(a6, a5);
        new F7(this, this);
        new F7(a6, this);
        return 1;
    }
}
new C3();
new C3();
new C3();
const v25 = new Uint32Array(181);
let v27 = BigUint64Array;
let v28 = new v27(1);
let v29 = 253;
[v29,,v27,v28] = v25;
try { v27["abs"](181, v29, v27); } catch (e) {}
new Uint16Array(v29);
for (let i42 = 0; i42 < 2; i42++) {
    const v48 = new Function("x");
    v48.name;
}
Function();

function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -1023095178;
    this.g = -1023095178;
    this.e = -1023095178;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
[v3];
[[v4,v5,v4]];
class C9 extends F0 {
    static m(a11, a12, a13) {
        const o14 = {
        };
        const v16 = new Proxy(v5, o14);
        const o17 = {
        };
        new Proxy(v16, Proxy);
        return this;
    }
}
new C9();
new C9();
new C9();
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

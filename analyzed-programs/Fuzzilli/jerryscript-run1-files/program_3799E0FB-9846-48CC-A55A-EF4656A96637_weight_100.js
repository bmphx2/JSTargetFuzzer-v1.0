const v1 = -Infinity;
class C3 {
    static get a() {
        this[this] = this;
        try {
        const t0 = "A";
        t0("A", this, this);
        } catch (e) {}
        return this;
    }
    static #e = v1;
    [-9] = v1;
    static c;
    ["A"];
    static b;
    1335 = "A";
}
new C3();
const v7 = new C3();
const v8 = new C3();
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a13;
    this.a = -9;
    this.c = v7;
}
const v14 = new F10(v7, "A");
new F10(v14, v8);
new F10(v8, v7);
Int32Array == Int32Array;
new Uint32Array(128);
new Uint32Array(5);
new Int8Array(257);

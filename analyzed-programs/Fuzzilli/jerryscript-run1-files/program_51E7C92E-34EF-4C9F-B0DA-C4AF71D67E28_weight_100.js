class C3 {
    static p(a5, a6) {
        const v7 = super.b;
        let v8;
        try { v8 = v7.freeze(a6); } catch (e) {}
        try {
            super.m(this, v7, v8);
        } catch(e10) {
        }
        return "growable";
    }
    get a() {
        const v12 = this >> -55354;
        function f13() {
            return v12;
        }
        return f13;
    }
}
const v14 = new C3();
new C3();
const v16 = new C3();
class C20 {
    static h = 16;
    static #f = -2147483647;
    n(a22, a23, a24) {
        a23.e = a24;
        C3.h = -2147483647 < a22;
        try {
            arguments.#f = "growable";
        } catch(e27) {
        }
        return -55354;
    }
    g = -2147483647;
    b;
}
const v28 = new C20();
const v29 = new C20();
const v30 = new C20();
function F31(a33, a34, a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v28;
}
new F31(-55354, v30, v28, -55354);
new F31(10, v29, v29, 10);
new F31(-55354, v30, v29, 16);
const v40 = v29.g;
try { v16.toString(v30, v40, -2147483647, v14, v16); } catch (e) {}
new Uint8Array(13);
new Float64Array(64);
new Int8Array(1359);

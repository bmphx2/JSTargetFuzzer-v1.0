const v0 = [];
class C1 {
    static #d = v0;
    #m() {
        function F3(a5) {
            if (!new.target) { throw 'must be called with new'; }
            this.b = v0;
        }
        const v6 = new F3(F3);
        new F3(v6);
        new F3(v6);
        return this;
    }
    h;
    static #g = v0;
    #c = v0;
}
const v9 = new C1();
const v10 = new C1();
const v11 = new C1();
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v9;
    this.b = a15;
    this.a = a14;
}
const v16 = new F12(v9, v10);
new F12(v11, v11);
const v18 = new F12(C1, C1);
class C19 extends C1 {
    static [v16] = v18;
    static p(a21, a22, a23, a24) {
        return v0;
    }
    g = v18;
    static o(a29, a30, a31) {
        let v32;
        try { v32 = v0.pop(); } catch (e) {}
        v18[C1] *= v32;
        function F33(a35, a36) {
            if (!new.target) { throw 'must be called with new'; }
            this.f = a30;
        }
        new F33(a31, v10);
        new F33(a31, v16);
        new F33(v11, this);
        return v18;
    }
}
new C19();
const v41 = new C19();
new C19();
v41 ** v41;
C19[Symbol.replace] = C1;
v41.__proto__;
new Float64Array(2051);
new Uint8Array(1);
new Uint16Array(1938);

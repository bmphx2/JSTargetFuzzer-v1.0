function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 16;
    this.b = this;
    this.h = 16;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v7 = [v5,F0,v3];
const v8 = [false,v3];
const v9 = [v4];
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a13;
    v4.a = v7;
    this.e = a14;
}
new F10(v3, v8, v4, v9);
const v17 = new F10(v4, v8, v7, v7);
const v18 = new F10(v5, v9, v5, v9);
class C19 {
    d = v3;
    o(a21, a22, a23, a24) {
        a24[268435440] = F10;
        return v18;
    }
    static get b() {
        const v29 = this[239];
        try { v29.n(v17, v29, F0); } catch (e) {}
        let v31 = 0;
        do {
            new Uint32Array(128);
            new BigInt64Array(64);
            new Float32Array(8);
            v31++;
        } while (v31 < 2)
        return v29;
    }
}
new C19();
new C19();
new C19();
for (let [i51, i52] = (() => {
        new Uint8Array();
        return [0, 10];
    })();
    i51 < i52;
    (() => {
        i51++;
        function f57(a58, a59, a60, a61) {
            return a59;
        }
    })()) {
}
function F64(a66) {
    if (!new.target) { throw 'must be called with new'; }
    Symbol();
}
new F64(F64);

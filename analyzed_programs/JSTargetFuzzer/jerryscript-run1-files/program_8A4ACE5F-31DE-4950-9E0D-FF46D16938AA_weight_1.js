class C3 {
    valueOf(a5) {
        super.b;
        return this;
    }
    static m(a8, a9) {
        Object.defineProperty(a8, a9, { enumerable: true, value: this });
        super.b;
        const o13 = {
            "maxByteLength": 8,
        };
        const v15 = new SharedArrayBuffer(2, o13);
        new Float32Array(v15);
        return this;
    }
}
const v18 = new C3();
const v19 = new C3();
const v20 = new C3();
function F21(a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a24;
    this.g = v19;
    class C26 {
    }
    65537n < C26;
    this.c = -2147483647;
}
const v29 = new F21(v18, v18, v19);
const v30 = new F21(v20, v20, v29);
new F21(v18, v18, v30);
const v34 = [String];
Reflect.apply(String.raw, String, v34);

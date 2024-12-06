class C3 {
    static set h(a5) {
        try {
            super.m(a5, a5);
        } catch(e7) {
        }
        Object.defineProperty(this, 1, { configurable: true, enumerable: true, value: this });
    }
    static o(a9) {
        try {
            super.m();
        } catch(e11) {
        }
        return a9;
    }
}
const v12 = new C3();
const v13 = new C3();
const v14 = new C3();
function f15(a16, a17) {
    const o30 = {
        get c() {
            try {
                super.valueOf(this, this);
            } catch(e20) {
            }
            new Float64Array(29);
            new Uint32Array(129);
            const v29 = new Uint16Array(35);
            return v29;
        },
    };
    return o30;
}
const v31 = f15(v13, v14);
const v32 = f15(v12, v14);
const v33 = f15("-1015006403", "-1015006403");
function f34() {
    return v31;
}
function F35(a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = C3;
    this.e = v12;
}
new F35(v32, v14);
new F35(v33, -831.8334490101869);
new F35(v31, -831.8334490101869);
function F42() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 6;
    this.f = 6;
}
const v45 = new F42();
new BigUint64Array(v45, BigUint64Array, BigUint64Array);
new Float32Array(v45);

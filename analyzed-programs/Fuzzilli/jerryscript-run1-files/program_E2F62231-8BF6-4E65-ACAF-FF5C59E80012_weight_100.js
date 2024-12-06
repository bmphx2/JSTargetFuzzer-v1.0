let v2 = NaN;
class C3 {
    get b() {
        let v5;
        try {
        const t0 = 16;
        v5 = new t0(this, this, 16, this, 1073741824);
        } catch (e) {}
        this[46] = v5;
        v2 = v5;
        return v5;
    }
    static get g() {
        v2 ||= this;
        return this;
    }
    static [v2] = 1073741824;
}
const v8 = new C3();
const v9 = new C3();
new C3();
function f11() {
    return 16;
}
const v14 = new Uint8Array(1);
const v17 = new BigInt64Array(0);
const v20 = new Int8Array(256);
b = v20;
var c = 256;
function f21(a22, a23) {
    const o24 = {
        ...v8,
        "b": v9,
        1073741825: Uint8Array,
        [v14]: v2,
        "c": v17,
    };
    return o24;
}
f21(256, 256);
f21(1, v2);
f21(16, 16);

function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -54200;
    this.g = -54200;
    this.d = -54200;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 {
    get f() {
        const o8 = {
            __proto__: v5,
            "e": C6,
            "g": v4,
            "f": this,
            ...this,
            "c": this,
            [this]: F0,
            "h": this,
            ...v5,
        };
        return v3;
    }
    static 3320 = v3;
    b;
    static e = v4;
    static [v3] = v4;
    static [v5] = v3;
}
const v9 = new C6();
const v10 = new C6();
const v11 = new C6();
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a17;
}
new F12(v3, v11, v3, v9);
new F12(v4, v9, v3, v10);
new F12(v3, v11, v3, v10);
switch ("getOwnPropertyDescriptor") {
    default:
        break;
}

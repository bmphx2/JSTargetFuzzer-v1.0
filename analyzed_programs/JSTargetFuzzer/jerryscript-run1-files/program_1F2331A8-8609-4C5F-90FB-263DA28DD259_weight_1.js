function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 2049993988;
    this.d = 2049993988;
    this.h = 2049993988;
}
let v3 = new F0();
const v4 = new F0(v3, F0);
let v5 = new F0();
function f6(a7, a8) {
    const o25 = {
        p(a10, a11, a12, a13) {
            Object.defineProperty(a12, "h", { writable: true, configurable: true, enumerable: true, get: f6 });
            return a13;
        },
        "a": v5,
        get g() {
            this.toString = a7;
            const v15 = a8.d;
            super.c;
            const v21 = [v3,this,v4];
            Reflect.apply(this.p, v5, v21);
            a7 = F0;
            a8[v15] = F0;
            v5 && F0;
            return v3;
        },
        __proto__: a7,
        [v4]: a7,
        "h": a8,
        "g": a7,
        ...v4,
        ...v3,
        "d": v5,
        "f": F0,
        "h": a7,
        "g": v5,
    };
    return o25;
}
const v26 = f6(f6, v5);
const v27 = f6(v26, v4);
const v28 = f6(f6, v5);
function f29() {
    return v26;
}
function F33(a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v26;
}
const o37 = {
    2107: f29,
    ...v28,
};
o37[65537] = v5;
new F33(-3, f29);
const v39 = new F33(-3, F0);
let v40 = new F33(-12, F33);
function F41(a43) {
    if (!new.target) { throw 'must be called with new'; }
}
switch (8) {
    case v3:
        ({"c":v3,"f":v5,} = o37);
        break;
    case F41:
        v40 %= v27;
        try { v39.toString(); } catch (e) {}
        break;
    case F41:
        break;
    default:
        break;
}

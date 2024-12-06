function f0() {
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 536870889;
    this.a = 15785;
    this.f = a6;
}
const v7 = new F4(1073741824);
const v8 = new F4(1073741824);
new F4(15785);
function f10(a11, a12, a13) {
    const o17 = {
        ...a11,
        "h": f0,
        get d() {
            super.d = this;
            new F4(a12);
            new f0();
            return f0;
        },
        "g": a13,
        "d": a13,
    };
    return o17;
}
f10(v7, 536870889, 1073741824);
f10(v7, 536870889, f10);
f10(v8, 1073741824, 15785);
const v23 = new Int8Array(12);
v23.byteLength *= f0;

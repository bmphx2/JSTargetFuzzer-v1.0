function f3() {
    return 536870887n;
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 536870887n;
    this.f = f3;
    this.h = -9223372036854775808n;
}
const v7 = new F4(-9223372036854775808n);
const v8 = new F4(-9223372036854775808n);
const v9 = new F4(-2012721457n);
function f10(a11, a12, a13, a14) {
    const o21 = {
        set b(a16) {
            [a16,v7,a16,v9,a16];
        },
        "g": f3,
        2: -9223372036854775808n,
        "d": v7,
        "h": a14,
    };
    return o21;
}
f10(v9, v8, v8, -2012721457n);
f10(v7, v9, v7, 536870887n);
f10(v8, v9, v9, 536870887n);
const o25 = {
};
new Proxy(f3, o25);
const o30 = {
    "maxByteLength": 129,
};
const v32 = new ArrayBuffer(129, o30);
new Uint8Array(v32);

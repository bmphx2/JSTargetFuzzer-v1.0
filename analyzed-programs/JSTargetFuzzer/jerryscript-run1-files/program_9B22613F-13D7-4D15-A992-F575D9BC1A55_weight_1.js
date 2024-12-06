function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 0;
    this.f = -33410;
}
new F3(-33410, 0);
const v8 = new F3(-33410, -33410);
const v9 = new F3(128, 0);
function f10() {
    return 0;
}
function f14(a15, a16) {
    const o21 = {
        "a": a16,
        "d": a16,
        "f": F3,
        "e": a15,
        __proto__: v8,
        "g": a15,
        1000: f10,
        set b(a18) {
            Object.defineProperty(this, "g", { configurable: true, value: this });
            a16 | 0;
            let [] = a18;
            this.f = super.h;
        },
    };
    return o21;
}
f14(0, v9);
f14(-33410, v8);
f14(4294967296, v8);
function f27() {
    let {...v29} = arguments;
    return Map;
}
f27(4, 4);
f27();

function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -9223372036854775808;
    this.e = -9223372036854775808;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o15 = {
        __proto__: v4,
        "h": v3,
        get c() {
            const v9 = a7.__proto__;
            try { v9(); } catch (e) {}
            return F0;
        },
        "g": F0,
        "e": v3,
        4096: v4,
        "f": a7,
    };
    return o15;
}
f6(v4);
f6(f6(v5));
new Uint8Array(256);
new Uint32Array(74);
new Int32Array(16);
([1000000000.0,4.0,-4.570131624509173,1.387679783877287e+308,940.4834288287686,-5.0,1.7976931348623157e+308,-0.0]).lastIndexOf(536870887, -1024);

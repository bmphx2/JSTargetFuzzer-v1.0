const v3 = ["-4294967297"];
const v4 = ["boolean","0","boolean"];
const v5 = [v4,v4,"0",v4];
function f6() {
    return "0";
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = f6;
    this.a = v3;
    this.f = a10;
}
new F7("0", "0");
const v12 = new F7("-4294967297", "-4294967297");
const v13 = new F7("-4294967297", "-4294967297");
function f14(a15, a16, a17, a18) {
    const o23 = {
        0: a15,
        ...v3,
        m(a20, a21, a22) {
            a20 *= a18;
            return this;
        },
        "g": v13,
        "c": a17,
        "h": f6,
        ...v12,
        [a17]: f6,
        "e": v3,
        [a15]: v13,
    };
    return o23;
}
v3.length *= f14(f14(f14(v4, v13, v5, v3), "0", v5, v3), v12, v3, v4);
v5[64];
v12[Symbol.toPrimitive];
v13 & v13;
const o32 = {
    "defineProperty": f6,
    "has": f6,
    "isExtensible": f14,
    "set": f14,
    "setPrototypeOf": f6,
};
new Proxy("boolean", o32);

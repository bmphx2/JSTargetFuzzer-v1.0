function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a5;
}
const v6 = new F3(4294967296);
const v7 = new F3(-128);
new F3(-1024);
function f9() {
    return F3;
}
function f10(a11, a12) {
    const o27 = {
        "b": f9,
        "c": -128,
        ...v7,
        1073741824: v6,
        "f": 4294967296,
        get e() {
            function f14(a15, a16) {
                v6.valueOf = f9;
                return a16[this];
            }
            f14(-1024, v7);
            return f14;
        },
        o(a20, a21, a22, a23) {
            a12 = -128;
            return 2147483648;
        },
    };
    return o27;
}
f10(-128, 4294967296);
f10(4294967296, 4294967296);
f10(-1024, -128);
const o38 = {
    toString(a32, a33, a34, a35) {
        return Proxy();
    },
};
async function f39(a40, a41) {
    1073741823 >>> o38;
    return a41;
}
const v45 = f39()[3162];
let v50 = -9007199254740992;
Math.pow(v45, ++v50);
Math.asinh(-128);

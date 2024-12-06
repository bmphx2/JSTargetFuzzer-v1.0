function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -65535;
    this.d = -65535;
    this.a = -65535;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f12(a13, a14, a15, a16) {
    const o25 = {
        "c": a14,
        1242779564: a16,
        ...v3,
        __proto__: a15,
        "a": v4,
        "d": a15,
        n(a18, a19, a20, a21) {
            for (let v22 = 0; v22 < 32; v22++) {
                F0["p" + v22] = v22;
            }
            return a18;
        },
    };
    return o25;
}
f12(F0, "MIN_SAFE_INTEGER", "undefined", v5);
f12(v4, "undefined", "MIN_SAFE_INTEGER", v4);
f12(v3, "undefined", "MIN_SAFE_INTEGER", v5);
new WeakSet();
const v45 = new URIError(512);
const v48 = new Int16Array(447);
new Uint32Array(2438);
function f55() {
}
v45.description <<= 2006448021;
const v63 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
("1073741824").match(v63.copyWithin(v63, v63));
new Uint8Array(0);
let v74 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v76 = new BigUint64Array(127);
v74 /= v76;
new WeakSet();
new BigInt64Array(2, -14, v48);
([5]).reverse();

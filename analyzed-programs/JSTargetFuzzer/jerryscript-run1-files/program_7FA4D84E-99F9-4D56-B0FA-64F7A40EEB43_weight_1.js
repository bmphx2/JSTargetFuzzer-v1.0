function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -65535;
    this.d = -65535;
    this.a = -65535;
}
const v3 = new F0();
const v4 = new F0();
let v5 = new F0();
v5 = v4;
delete v3[v3];
function f10() {
    return F0;
}
function f14(a15, a16, a17, a18) {
    const o27 = {
        "c": a16,
        1242779564: a18,
        ...v3,
        __proto__: a17,
        "a": v4,
        "d": a17,
        n(a20, a21, a22, a23) {
            for (let v24 = 0; v24 < 32; v24++) {
                F0["p" + v24] = v24;
            }
            return a20;
        },
    };
    return o27;
}
f14(F0, "MIN_SAFE_INTEGER", "undefined", v5);
f14(v4, "undefined", "MIN_SAFE_INTEGER", v4);
f14(v3, "undefined", "MIN_SAFE_INTEGER", v5);
new WeakSet();
const v47 = new URIError(512);
const v50 = new Int16Array(447);
new Uint32Array(2438);
function f57() {
}
const o65 = {
    "maxByteLength": 512,
};
const v67 = new ArrayBuffer(512, o65);
new Uint8Array(v67);
v47.description <<= 2006448021;
const v75 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
("1073741824").match(v75.copyWithin(v75, v75));
new Uint8Array(0);
let v86 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v88 = new BigUint64Array(127);
v86 /= v88;
new WeakSet();
new BigInt64Array(2, -14, v50);
([5]).reverse();

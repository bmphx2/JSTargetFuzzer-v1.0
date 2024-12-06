function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -4096;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f9(a10, a11, a12) {
    const o13 = {
        "b": v3,
        __proto__: v5,
        ...v5,
        "a": 3n,
        "h": a12,
        "c": v3,
        "g": a10,
        [v5]: a10,
        "e": a11,
        [F0]: a12,
    };
    return o13;
}
f9(v4, v3, 3n);
f9(f9(v4, v4, 3n), F0, -2n);
new WeakSet();
const v33 = new URIError(512);
const v36 = new Int16Array(447);
new Uint32Array(2438);
function f43() {
}
v33.description <<= 2006448021;
const v51 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
("1073741824").match(v51.copyWithin(v51, v51));
new Uint8Array(0);
let v62 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v64 = new BigUint64Array(127);
v62 /= v64;
new WeakSet();
new BigInt64Array(2, -14, v36);
([5]).reverse();

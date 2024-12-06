function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -9223372036854775807;
    this.g = -9223372036854775807;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a8;
    this.e = v4;
}
const v9 = new F6(v3);
const v10 = new F6(v4);
new F6(v5);
const v13 = new Map();
new Int8Array(168);
new Int32Array(9);
new Int16Array(2);
v10.e += 2;
new F0();
v3 == v10;
const o27 = {
};
new Proxy(v9, o27);
new Set();
new WeakMap();
new WeakSet();
const v54 = new URIError(512);
const v57 = new Int16Array(447);
for (let v59 = 0; v59 < 32; v59++) {
    v13["p" + v59] = v59;
}
new Uint32Array(2438);
function f67() {
}
v54.description <<= 2006448021;
const v75 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
("1073741824").match(v75.copyWithin(v75, v75));
new Uint8Array(0);
const v85 = [-8,4294967295,148900462];
let v86 = RegExp.bind("2147483647", v85);
const v88 = new BigUint64Array(127);
function f89(a90, a91) {
    const o92 = {
        "f": a90,
        ...v86,
        "e": a91,
    };
    return o92;
}
f89(v86, 26357);
f89(v85, 26357);
f89(v75, 2);
v86 /= v88;
new WeakSet();
new BigInt64Array(2, -14, v57);
([5]).reverse();

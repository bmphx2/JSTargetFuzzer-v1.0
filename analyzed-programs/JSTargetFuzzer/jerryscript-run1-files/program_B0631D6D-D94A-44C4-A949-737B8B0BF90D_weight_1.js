function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 16;
    this.c = 16;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
let v7 = -1e-15;
function f9(a10, a11) {
    const o26 = {
        p(a13, a14) {
            const v15 = +a13;
            a10 = a14;
            let [v18] = a13;
            a10[v4] = F0;
            v7 = a14;
            const o23 = {
            };
            new Proxy(v5, o23);
            return v15;
        },
    };
    return o26;
}
f9(v7, v5);
f9(v7, v3);
f9(1.7976931348623157e+308, v4);
new Int8Array(168);
new Int32Array(9);
new Int16Array(2);
new Set();
new WeakMap();
new WeakSet();
const v65 = new URIError(512);
const v68 = new Int16Array(447);
new Uint32Array(2438);
function f75() {
}
v65.description <<= 2006448021;
const v83 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
("1073741824").match(v83.copyWithin(v83, v83));
new Uint8Array(0);
const v93 = [-8,4294967295,148900462];
let v94 = RegExp.bind("2147483647", v93);
const v96 = new BigUint64Array(127);
function f97(a98, a99) {
    const o100 = {
        "f": a98,
        ...v94,
        "e": a99,
    };
    return o100;
}
f97(v94, 26357);
f97(v93, 26357);
f97(v83, 2);
v94 /= v96;
new WeakSet();
new BigInt64Array(2, -14, v68);
([5]).reverse();

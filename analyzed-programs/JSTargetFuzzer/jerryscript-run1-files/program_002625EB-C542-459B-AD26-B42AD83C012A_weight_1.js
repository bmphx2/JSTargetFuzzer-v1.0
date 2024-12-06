function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 10000;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o13 = {
        [v4]: v3,
        ...a7,
        "b": F0,
        [v4](a9, a10) {
            try {
                super.indexOf(v3, this, this, v4, a7);
            } catch(e12) {
            }
            return a7;
        },
    };
    return o13;
}
f6(v5);
f6(v3);
const v16 = f6(v3);
[v16,v5];
[v16,v4];
[v4];
new Int8Array(168);
new Int32Array(9);
new Int16Array(2);
new Set();
let v33 = 1073741824n;
new WeakMap();
new WeakSet();
const v55 = new URIError(512);
const v58 = new Int16Array(447);
new Uint32Array(2438);
function f65() {
}
v55.description <<= 2006448021;
const v73 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
let v74 = 0;
while (v74 < 6) {
    v33 = 63703n;
    const t44 = "m";
    t44[7] = v4;
    v74++;
}
("1073741824").match(v73.copyWithin(v73, v73));
new Uint8Array(0);
const v87 = [-8,4294967295,148900462];
let v88 = RegExp.bind("2147483647", v87);
const v90 = new BigUint64Array(127);
function f91(a92, a93) {
    const o94 = {
        "f": a92,
        ...v88,
        "e": a93,
    };
    return o94;
}
f91(v88, 26357);
f91(v87, 26357);
f91(v73, 2);
v88 /= v90;
new WeakSet();
new BigInt64Array(2, -14, v58);
([5]).reverse();

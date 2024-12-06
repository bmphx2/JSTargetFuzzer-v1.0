function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = true;
    this.e = true;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function f6(a7, a8) {
    const o12 = {
        2: a8,
        "c": v5,
        __proto__: v3,
        set d(a10) {
            v4.__proto__;
            F1 &= a10;
        },
        ...a8,
        "g": F1,
        "h": F1,
    };
    return o12;
}
f6(v5, v3);
f6(v3, v4);
f6(v5, v5);
new Int16Array(257);
new Uint8Array(8);
new Float32Array(2522);
const v27 = new Date();
v4[257] = v27 & 257;
v5 >= v4;
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

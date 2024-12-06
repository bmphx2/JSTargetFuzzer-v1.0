function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function f6(a7) {
    const o13 = {
        "c": F1,
        get b() {
            Object.defineProperty(v5, "d", { writable: true, enumerable: true, get: f0 });
            f0();
            const o10 = {
                "apply": f0,
                "getPrototypeOf": f0,
                "isExtensible": f0,
                "preventExtensions": f0,
                "setPrototypeOf": f0,
            };
            const v12 = new Proxy(v5, o10);
            return v12;
        },
    };
    return o13;
}
const v14 = f6(f0);
const v15 = f6(v14);
const v16 = f6(f6);
v14 % v16;
function F19(a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a21;
}
const v24 = new F19(v15, v4, v14);
new F19(v16, v3, v16);
new F19(v15, v4, v14);
~"-2";
const v38 = ("match")["search"](v15, v5, 257, 257);
function F43() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -51901;
}
const v46 = new F43();
v46[512] = v46;
const v47 = new Uint8Array(512);
new Int16Array(447);
new Uint32Array(2438);
function f57() {
}
Object.defineProperty(([]).values(), "e", { writable: true, enumerable: true, value: 119 });
("-2").slice(45103);
1073741825 >>> v24;
v24 * 1073741825;
Math.max(1073741825);
v47.description <<= 2006448021;
const v75 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
v75.copyWithin(v75, v75);
("1073741824").match(v38);
new Uint8Array(0);
let v86 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v88 = new Int32Array(127);
/d/i * /(ab|cde)+/gyu;
Symbol.search;
v86 /= v88;
class C95 {
    constructor(a97, a98) {
    }
}
for (const v99 in C95) {
}
new WeakSet();
new BigInt64Array(2);
([5]).reverse();

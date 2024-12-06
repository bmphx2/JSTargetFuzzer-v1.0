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
class C27 {
    set a(a29) {
        for (let i31 = 0; i31 < 1;) {
        }
    }
}
~"-2";
const v47 = ("match")["search"](v15, v5, 257, 257);
function F52() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -51901;
}
const v55 = new F52();
v55[512] = v55;
const v56 = new Uint8Array(512);
new Int16Array(447);
new Uint32Array(2438);
function f66() {
}
Object.defineProperty(([]).values(), "e", { writable: true, enumerable: true, value: 119 });
("-2").slice(45103);
1073741825 >>> v24;
v24 * 1073741825;
Math.max(1073741825);
v56.description <<= 2006448021;
const v84 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
v84.copyWithin(v84, v84);
("1073741824").match(v47);
new Uint8Array(0);
let v95 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v97 = new Int32Array(127);
/d/i * /(ab|cde)+/gyu;
Symbol.search;
v95 /= v97;
class C104 {
    constructor(a106, a107) {
    }
}
for (const v108 in C104) {
}
new WeakSet();
new BigInt64Array(2);
([5]).reverse();

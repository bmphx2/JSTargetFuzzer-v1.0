function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 2;
    this.b = 2;
    this.g = 2;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v5;
    this.e = v5;
}
const v10 = new F6(v3, v4);
new F6(v4, v3);
const v12 = new F6(v5, v5);
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v4;
    this.c = a16;
    this.b = a15;
}
const v18 = new F13(v10, v10, v5);
const v19 = new F13(v12, v10, v4);
new F13(v12, v18, v5);
function f21() {
    return F13;
}
class C28 {
    static set b(a30) {
        this[Symbol.replace] = a30;
    }
    m(a34) {
        this.__proto__ = a34;
        this[a34];
        return 1;
    }
    static 988182296;
}
new C28();
new C28();
new C28();
[363177715,536870889,4294967296,268435456,1073741825,-131192256,13,268435439,181606122];
const v40 = [257,11828,6986,10000,-145038601,-4294967295,45779318,257,-4294967297,-9223372036854775808];
[64830,1606353013,1000,16,-256,6,-28768459,-16,-4294967296];
[536870887,-2894,-6,499474750,-1073741824,-2147483649,6];
const v46 = [-4096,-1073741824,-1,-41883,128,-49918,536870887,-268435456];
[128,-128,-1150640489];
const v51 = [-2.2250738585072014e-308,-5.0148722496026155,1000000000000.0,-2.0,455873.09426499135];
[2.220446049250313e-16];
[1.7976931348623157e+308,1.4892462314437794e+308,-5.0,2.0,-131960.2621586884,-1e-15];
function F55() {
    if (!new.target) { throw 'must be called with new'; }
}
const v57 = new F55(16, v51, 16);
new Int32Array(v57);
new Int32Array(8);
new Uint16Array(10);
v18[Uint16Array];
v46[-65536] = 8;
const o72 = {
};
new Proxy(v40, o72);
new Int32Array(255);
const v84 = new Int8Array(1);
new Int16Array(8);
const v90 = new Uint8Array(3892);
function f91() {
    const o92 = {
        "apply": f91,
        "call": f91,
        "construct": f21,
        "deleteProperty": f91,
        "get": f21,
        "getOwnPropertyDescriptor": f21,
        "getPrototypeOf": f21,
        "has": f21,
        "ownKeys": f91,
        "preventExtensions": f21,
        "set": f91,
    };
    new Proxy(v19, o92);
    return 1;
}
const v95 = [-1e-15,-Infinity];
[0.2362170527912898,0.39782676765013036,-3.0,-774628.9736404992];
[-2.0,964560.0181082794,220.54163283272646];
const v101 = v95[2147483648];
let v102;
try { v102 = v84.forEach(v101, v84); } catch (e) {}
2441 ** v102;
const o104 = {
    "defineProperty": f91,
    "get": v101,
};
new Proxy(v90, o104);

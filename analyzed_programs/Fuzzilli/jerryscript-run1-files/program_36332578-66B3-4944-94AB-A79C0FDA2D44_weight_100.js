const v1 = new Date();
class C2 extends Date {
    static [v1] = Date;
    constructor(a4, a5) {
        super(a4);
        this[10];
        const o7 = {
            "apply": Date,
            "call": Date,
            "deleteProperty": Date,
            "getOwnPropertyDescriptor": Date,
            "has": Date,
            "isExtensible": Date,
            "ownKeys": Date,
            "set": Date,
            "setPrototypeOf": this,
        };
        new Proxy(this, o7);
    }
}
const v10 = new C2(Date, Date);
const v11 = new C2(v10, C2);
const v12 = new C2(v11, v10);
function f13(a14, a15) {
    const o23 = {
        [C2]: Date,
        [a14](a17, a18) {
            try { new a14(v10, a17, this, a18, v11); } catch (e) {}
            Object.defineProperty(a15, 1073741823, { writable: true, get: Date, set: Date });
            return v10;
        },
        get a() {
            v11 !== this ? v11 : this;
            super.f = v10;
            return v12;
        },
        "d": v10,
        "c": a15,
        [a15]: a15,
    };
    return o23;
}
const v24 = f13(Date, v11);
const v25 = f13(C2, v10);
const v26 = f13(v11, v1);
const v27 = [13540];
const v28 = [-2147483649,-1759354405,-1,9223372036854775807,-1,9223372036854775807,164397787,45578,-12032,10000];
const v29 = [29884];
function F30(a32, a33, a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = Date;
    this.f = v25;
}
new F30(v27, v24, v25, v28);
const v37 = new F30(v29, v25, v10, v29);
new F30(v37, v26, v25, v11);
const v39 = [-4.0,2.2250738585072014e-308,0.8801063278041202,1.7193355812438134e+307,-1000000.0,-6.586746902019079e+307,-570.8632632085355,0.8796067776990469,-1e-15];
const v40 = [1000000000.0,-2.2250738585072014e-308,-415272.49272862973,0.5759405830535007,-Infinity,-4.0,5.0,397.36030222149566,-4.0];
const v41 = [0.5717076743548977,Infinity,-4.1847718810000927e+307,0.8091260483796419,1000000000000.0,2.1440621146872356,1000000.0,-5.706773679629215,-305251.96687599516];
function F42(a44) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v41;
}
new F42(v40);
let v46 = new F42(v39);
new F42(v41);
new Uint8ClampedArray(1436);
new BigUint64Array(7);
new BigUint64Array(98);
new Map();
const v62 = new Uint16Array(6);
for (let v63 = 0; v63 < 5; v63++) {
    new Uint8Array(Uint8Array, Uint16Array);
    new Uint8Array(1, "-17161", "-17161");
    v46 = 1;
    class C78 {
        n(a80) {
            eval(C78);
        }
    }
    new Int16Array(14);
    Math.max(-9007199254740992);
    v62.includes(v63);
}
new Int32Array(2783);
new Uint32Array(128);
new Float64Array(10);
function F102(a104) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 65535;
    this.g = a104;
    this.g = 128;
}
new F102(536870888);
new F102(536870888);
new F102(-47534);
typeof null;
9007199254740992 - 9007199254740992;
6 < 0;
new Uint32Array(1024);
const v119 = new Uint8ClampedArray(2229);
new Float64Array(1000, v62, Float64Array);
delete v119[10];
let v124 = 10;
for (; v124--;) {
    Math.acos(65535);
    -1000 ^ 128;
}

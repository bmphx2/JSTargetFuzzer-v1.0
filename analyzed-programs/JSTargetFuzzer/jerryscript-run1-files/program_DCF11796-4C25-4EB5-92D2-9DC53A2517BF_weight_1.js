function f0() {
}
function f1() {
    return f0;
}
const v2 = [f0,f0,f0,f1,f0];
const v3 = [f1,f0,v2,v2,f0];
const v4 = [v3,v3,v2,f1];
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a7;
}
const v8 = v3[8];
v4[Symbol.species] = v8;
[-1e-15,734904.7739973939,1000000000.0,114692.1819269075,-1.7976931348623157e+308,1e-15,-1000.0];
[1.7976931348623157e+308,NaN,2.220446049250313e-16,-1000000000000.0,696.2072448309959,2.2250738585072014e-308,-1.0,0.746443925821885,-282622.97989298264,1000000000000.0];
[0.855798852821284,3.314681710142814,-1.2751391190247877e+308,1.0];
const v14 = new F5(v2);
const v15 = new F5(v4);
const v16 = new F5(v2);
function f17(a18, a19, a20) {
    const o34 = {
        "d": v15,
        "f": f0,
        8: a18,
        [v14]: v15,
        [f1]: f0,
        1781703106: a20,
        p(a22, a23, a24, a25) {
            const v26 = async (a27, a28, a29) => {
                const o30 = {
                    "defineProperty": f1,
                    "deleteProperty": f1,
                    "getOwnPropertyDescriptor": f0,
                    "getPrototypeOf": f0,
                    "preventExtensions": f0,
                    "setPrototypeOf": f0,
                };
                const v32 = new Proxy(a28, o30);
                await v32;
                return a23;
            };
            return a23;
        },
    };
    return o34;
}
f17(v16, v15, v3);
f17(v16, v14, v4);
f17(v14, v16, v3);
function f48() {
    return -4096;
}
function F52() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -65537;
    this[15] = F52;
    const v55 = -65537 in this;
    new Uint8Array(12);
    new Int16Array(127);
    new Uint8ClampedArray(3945);
    this.valueOf = v55;
    for (let v65 = 0; v65 < 32; v65++) {
        this["p" + v65] = v65;
    }
    this.f = -65537;
}
let v68 = new F52();
const v69 = new F52();
const v70 = new F52();
Promise.resolve(BigInt64Array);
function f75() {
    delete arguments["bigint"];
    return v69;
}
f75();
new Uint32Array(5);
new Int32Array(5);
const v87 = new Uint8Array(150);
function f88() {
}
let v89 = 0;
do {
    v70 / v70;
    v89++;
} while (v89 < 9)
let v102 = -21186;
const v104 = +-9223372036854775808;
Math.imul(v102, v102);
++v102;
Math.clz32(v104);
const v108 = v104 % -9223372036854775808;
Math.tan(v102);
v108 + v102;
new Uint8Array(0);
let v117 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v119 = new Int32Array(127);
const v120 = ("2147483647")[11];
v87 instanceof v117;
RegExp[8] = 4.0;
const t100 = "2147483647";
t100.__proto__ = v70;
Uint32Array < v120;
v117 /= v119;
const v124 = new WeakSet();
const v130 = new BigInt64Array(2);
127 instanceof Int32Array;
function f133() {
    return v130;
}
v68 = v124;
([5]).reverse();

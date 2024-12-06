function f0() {
}
const v1 = [f0];
const v2 = [v1,f0,v1,v1];
const v3 = [v2,v2,f0,f0];
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a10;
}
new F7(f0, v2, v1);
new F7(F7, v2, v3);
const v14 = new F7(9, v3, v1);
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -65537;
    this[15] = F15;
    this.valueOf = -65537 in this;
    for (let v19 = 0; v19 < 32; v19++) {
        this["p" + v19] = v19;
    }
    this.f = -65537;
}
let v22 = new F15();
new F15();
const v24 = new F15();
new Uint32Array(5);
new Int32Array(5);
const v33 = new Uint8Array(150);
function f34() {
}
let v35 = 0;
do {
    v24 / v24;
    v35++;
} while (v35 < 9)
let v40 = 0;
do {
    Object.defineProperty(v3, v22, { writable: true, value: v14 });
    const o41 = {
        "apply": f34,
        "call": f0,
        "construct": f0,
        "defineProperty": f34,
        "deleteProperty": f0,
        "get": f34,
        "getPrototypeOf": f0,
        "set": f34,
        "setPrototypeOf": f0,
    };
    new Proxy(v33, o41);
    v40++;
} while (v40 < 9)
Math.acos(Math);
new Uint8Array(0);
new Int8Array(60);
new Float32Array(249);
let v67 = 1146;
new Int8Array(v67);
let v71 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v73 = new Int32Array(127);
const v74 = ("2147483647")[11];
v33 instanceof v71;
RegExp[8] = 4.0;
const t63 = "2147483647";
t63.__proto__ = v24;
Uint32Array < v74;
RegExp[Int32Array] = v35;
v67 **= v40;
v24.valueOf = v71;
v33.length;
try { v74(5, -40508, v40, v1); } catch (e) {}
Math.trunc(0.0);
v71 /= v73;
const v83 = new WeakSet();
const v89 = new BigInt64Array(2);
127 instanceof Int32Array;
function f92() {
    return v89;
}
v22 = v83;
([5]).reverse();

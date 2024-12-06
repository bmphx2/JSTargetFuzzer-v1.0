function f0() {
}
function f1() {
    const o6 = {
        "h": f0,
        "b": f0,
        "d": f0,
        "e": f0,
        [f0]: f0,
        get g() {
            const o3 = {
                "apply": f0,
                "call": f0,
                "construct": f0,
                "defineProperty": f0,
                "deleteProperty": f0,
                "get": f0,
                "getOwnPropertyDescriptor": f0,
                "e": f0,
                "set": f0,
            };
            new Proxy(this, o3);
            return f0;
        },
    };
    return o6;
}
const v7 = f1();
const v8 = f1();
const v9 = f1();
class C10 extends f1 {
    static [v8] = v9;
    constructor(a12) {
        super();
        v7.g;
        function F17(a19, a20) {
            if (!new.target) { throw 'must be called with new'; }
            this.c = 536870887;
        }
        new F17(this, a12);
        new F17(1, v7);
        new F17(f1, v7);
    }
}
new C10(f1);
const v25 = new C10(C10);
new C10(v25);
function F30() {
    if (!new.target) { throw 'must be called with new'; }
    F30.c = -4294967297;
}
const v33 = new F30();
new F30();
new F30();
function f37() {
    const v40 = new Uint32Array(858);
    return v40;
}
function f43() {
    return v33;
}
const v46 = new BigUint64Array(BigUint64Array, BigUint64Array);
v46.copyWithin();
const v50 = RegExp.bind(2);
Math.fround();
Math.min(0.2148301603058278);
let v56 = 1073741824n;
v56 &= v56;
try { Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C70 {
}
const v72 = new v50(1);
const v75 = new Int8Array(107);
for (let i78 = 0, i79 = 10; i78 < i79;) {
    v75[v72] = i78;
    ++i78;
    Math.max(-7);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v95 = new Int8Array(Int8Array, Int8Array, Int8Array);
v95.includes(v95, v95);
new Uint8ClampedArray(6);
try {
    new WeakSet(4087n);
} catch(e102) {
} finally {
}

function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -12;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o18 = {
        "f": a7,
        __proto__: a7,
        "c": a7,
        set d(a10) {
            const o13 = {
                "maxByteLength": 243,
            };
            const v15 = new SharedArrayBuffer(127, o13);
            new a8(v15);
        },
    };
    return o18;
}
f6(v4, v4);
f6(v4, v3);
f6(v5, v5);
new Int8Array(Int8Array);
new Int32Array(9);
new Int16Array(2);
new Set();
new WeakMap();
new WeakSet();
const v60 = new URIError(512);
const v63 = new Int16Array(447);
new Uint32Array(2438);
function f70() {
    class C72 {
        constructor(a74) {
            ("getOwnPropertyDescriptor").match(a74);
        }
    }
    const v76 = new C72();
    new C72(v76);
}
v60.description <<= 2006448021;
const v85 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
("1073741824").match(v85.copyWithin(v85, v85));
new Uint8Array(0);
const v95 = [-8,4294967295,148900462];
let v96 = RegExp.bind("2147483647", v95);
const v98 = new BigUint64Array(127);
function f99(a100, a101) {
    const o102 = {
        "f": a100,
        ...v96,
        "e": a101,
    };
    return a100;
}
f99(v96, 26357);
f99(v95, 26357);
f99(-9.720861708692185, 2);
v96 /= v98;
new f70();
new BigInt64Array(2, -14, v63);
([5]).reverse();

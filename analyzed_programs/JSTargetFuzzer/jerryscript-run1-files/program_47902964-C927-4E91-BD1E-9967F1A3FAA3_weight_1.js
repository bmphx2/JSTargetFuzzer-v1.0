function f3() {
    return 2147483648;
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a6;
    this.g = a6;
    this.a = 0;
}
new F4(2147483648);
new F4(2147483648);
new F4(2147483648);
function f16() {
    return 2n;
}
const t15 = 16;
t15.toString = f16;
const t17 = f16();
const v24 = delete t17[f16];
function f25() {
    return f16;
}
const v31 = new Uint8Array(2);
let v33 = Float32Array;
const v34 = new v33(127);
new Int32Array(243, 243, v24);
new gc();
new Number(127);
new BigInt64Array(3886);
const o48 = {
    set prototype(a47) {
    },
};
const v51 = new Set([5.0]);
v51.values();
new Uint32Array(0);
v33 += v33;
let v56;
try { v56 = gc(v31); } catch (e) {}
const v58 = [v56];
Reflect.apply(v34.sort, v34, v58);
try { v58.flat(); } catch (e) {}
[498897049];
[-57150070,-2147483647,-11,-19440739,257,-65536,5,-1371366486,-5,-4294967296];
[-9007199254740990,-530113451,4,-14,-45856,2];
const v67 = new Int8Array();
const v68 = v67.values();
const v71 = new BigInt64Array(2);
v71.lastIndexOf(v68, 1024);

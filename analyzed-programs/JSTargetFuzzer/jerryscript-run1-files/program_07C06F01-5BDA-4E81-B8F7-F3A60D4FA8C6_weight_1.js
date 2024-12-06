function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -4294967295;
    this.d = -4294967295;
    this.g = -4294967295;
}
new F0(F0);
new F0();
new F0();
function f15() {
    return 2n;
}
const t12 = 16;
t12.toString = f15;
const t14 = f15();
const v23 = delete t14[f15];
function f24() {
    return f15;
}
const v30 = new Uint8Array(2);
let v32 = Float32Array;
const v33 = new v32(127);
new Int32Array(243, 243, v23);
new gc();
new Number(127);
new BigInt64Array(3886, BigInt64Array);
new Uint32Array(0);
v32 += v32;
let v48;
try { v48 = gc(v30); } catch (e) {}
const v50 = [v48];
Reflect.apply(v33.sort, v33, v50);
try { v50.flat(); } catch (e) {}
[498897049];
[-57150070,-2147483647,-11,-19440739,257,-65536,5,-1371366486,-5,-4294967296];
[-9007199254740990,-530113451,4,-14,-45856,2];

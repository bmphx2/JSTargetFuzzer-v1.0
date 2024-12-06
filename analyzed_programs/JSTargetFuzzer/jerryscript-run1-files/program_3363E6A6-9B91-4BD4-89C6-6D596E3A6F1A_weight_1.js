function f3() {
    return -11;
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = f3;
}
const v7 = new F4(-11);
const v8 = new F4(268435456);
const v9 = new F4(-11);
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v7;
}
new F13(v7, v9);
new F13(v8, v9, -42423, F13, -42423);
new F13(v8, v9);
function f23() {
    return 2n;
}
const t20 = 16;
t20.toString = f23;
const t22 = f23();
const v31 = delete t22[f23];
function f32() {
    return f23;
}
const v38 = new Uint8Array(2);
let v40 = Float32Array;
const v41 = new v40(127);
new Int32Array(243, 243, v31);
new gc();
new Number(127);
new BigInt64Array(3886);
new Uint32Array(0);
v40 += v40;
let v56;
try { v56 = gc(v38); } catch (e) {}
const v58 = [v56];
Reflect.apply(v41.sort, v41, v58);
try { v58.flat(); } catch (e) {}
[498897049];
[-57150070,-2147483647,-11,-19440739,257,-65536,5,-1371366486,-5,-4294967296];
[-9007199254740990,-530113451,4,-14,-45856,2];

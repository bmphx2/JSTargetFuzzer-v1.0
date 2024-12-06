function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 644512082;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a9;
}
const v10 = new F6(v3, v5);
const v11 = new F6(v10, F0);
new F6(v10, v11);
function f22() {
    return 2n;
}
const t17 = 16;
t17.toString = f22;
const t19 = f22();
const v30 = delete t19[f22];
function f31() {
    return f22;
}
const v37 = new Uint8Array(2);
let v39 = Float32Array;
const v40 = new v39(127);
new Int32Array(243, 243, v30);
const v45 = new gc();
new Number(127);
new BigInt64Array(3886);
switch (127) {
    case f31:
        const v55 = ~127 * 127;
        v45 ** -22973n;
        16 * v55;
}
new Uint32Array(0);
v39 += v39;
let v61;
try { v61 = gc(v37); } catch (e) {}
const v63 = [v61];
Reflect.apply(v40.sort, v40, v63);
try { v63.flat(); } catch (e) {}
[498897049];
[-57150070,-2147483647,-11,-19440739,257,-65536,5,-1371366486,-5,-4294967296];
[-9007199254740990,-530113451,4,-14,-45856,2];

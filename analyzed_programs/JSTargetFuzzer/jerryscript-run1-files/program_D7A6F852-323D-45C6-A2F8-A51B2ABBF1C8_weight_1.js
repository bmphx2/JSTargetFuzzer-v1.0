function f0() {
}
function f1() {
    return f0;
}
function f5() {
    return 1073741824;
}
function f6() {
    return -24800;
}
[f6,f1,-24800,268435440];
[f0,[f5],1073741824];
new Int16Array(0);
let v14 = BigUint64Array;
new v14(14);
new Uint16Array(f1);
const v21 = new Array(10);
function f25(a26, a27, a28, a29) {
    const o39 = {
        "g": 4096,
        ...a29,
        "e": a27,
        set b(a31) {
            function F32(a34, a35) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a34;
            }
            new F32(a29, 129);
            new F32(a28, a28);
            new F32(F32, 481111932);
        },
    };
    return o39;
}
const v40 = f25(4096, 481111932, 129, v21);
let v41 = f25(10, 481111932, 10, f25);
f25(v40, 4096, 481111932, 4096);
v41.g;
try {
    let v44;
    try { v44 = v40.isSealed(); } catch (e) {}
    v41 = v44;
    v14 = v44;
} catch(e45) {
    e45[0] = e45;
    try { e45(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);

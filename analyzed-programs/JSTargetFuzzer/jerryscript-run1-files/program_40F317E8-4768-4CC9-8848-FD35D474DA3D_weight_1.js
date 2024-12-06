function f0() {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a6;
    this.b = f0;
    a6.c = -14;
}
new F4(-14, -14);
new F4(-14, -952131092);
new F4(-14, 436274359);
[48611,431572038];
[1912075776,-639455221];
const v19 = [5,1675901710,536870887,-12,129];
const v22 = new Array(10);
let v24 = 4096;
function f26(a27, a28, a29, a30) {
    const o40 = {
        "g": v24,
        ...v19,
        "e": a28,
        set b(a32) {
            function F33(a35, a36) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a35;
            }
            new v24(a30, 129);
            new a27(a29, f26);
            new F33(F33, 481111932);
        },
    };
    return a30;
}
let v41 = f26(v24, 481111932, 129, v22);
const v42 = f26(10, 481111932, 10, 481111932);
f26(v41, v24, 481111932, v24);
v41.g;
try {
    let v45;
    try { v45 = F4.isSealed(); } catch (e) {}
    v41 = v45;
    v24 = v42;
} catch(e46) {
    e46[0] = "d";
    try { e46(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(v22);
new Int16Array(213);

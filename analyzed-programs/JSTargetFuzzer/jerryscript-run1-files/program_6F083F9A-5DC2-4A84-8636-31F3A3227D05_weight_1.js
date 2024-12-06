function f0() {
}
new Date();
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = f0;
    this.c = a12;
    this.b = f0;
}
new F9(-5.0, -256, -5.0, -15074);
new F9(5.992716524803196, -15074, 5.992716524803196, -15074);
new F9(Infinity, 61878, Infinity, -256);
const v20 = new Array(10);
let v22 = 4096;
function f24(a25, a26, a27, a28) {
    const o38 = {
        "g": v22,
        ...10,
        "e": a26,
        set b(a30) {
            function F31(a33, a34) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a33;
            }
            new F31(a28, 129);
            new F31(a27, a27);
            new F31(F31, 481111932);
        },
    };
    return o38;
}
let v39 = f24(v22, 481111932, 129, v20);
f24(10, 481111932, 10, f24);
f24(v39, v22, 481111932, v22);
v39.g;
try {
    let v43;
    try { v43 = v39.isSealed(); } catch (e) {}
    v39 = v43;
    v22 = v43;
} catch(e44) {
    e44[0] = e44;
    try { e44(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);

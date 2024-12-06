function f0() {
}
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 1e-15;
    this.e = a11;
    this.g = a12;
}
new F7("isFinite", 0.45097590219024275, 0.45097590219024275, 1e-15);
new F7("number", 0.45097590219024275, 0.45097590219024275, "number");
new F7("isFinite", 0.8707227971639405, 0.8707227971639405, 0.8707227971639405);
const v18 = new Array(10);
let v20 = 4096;
function f22(a23, a24, a25, a26) {
    const o36 = {
        "g": v20,
        ...a26,
        "e": a25,
        set b(a28) {
            function F29(a31, a32) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a31;
            }
            new F29(a26, a26);
            new F29(a25, a25);
            new F29(F29, 481111932);
        },
    };
    return o36;
}
let v37 = f22(v20, 481111932, 129, v18);
f22(10, 481111932, 10, f22);
f22(v37, v20, 481111932, v20);
v37.g;
try {
    let v41;
    try { v41 = v37.isSealed(); } catch (e) {}
    v37 = v41;
    v20 = v41;
} catch(e42) {
    e42[0] = e42;
    try { e42(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);

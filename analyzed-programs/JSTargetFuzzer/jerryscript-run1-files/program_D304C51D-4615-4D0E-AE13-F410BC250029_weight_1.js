function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 46048331;
    this.f = 46048331;
}
new F0();
new F0();
new F0();
new Set();
new Uint16Array(179);
new Float32Array(796);
new Float32Array(1416);
const v25 = new Array(10);
let v27 = 4096;
function f29(a30, a31, a32, a33) {
    const o43 = {
        "g": v27,
        ...a33,
        "e": a31,
        set b(a35) {
            function F36(a38, a39) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a38;
            }
            new F36(a33, 129);
            new F36(a32, a32);
            new F36(F36, 481111932, 1416);
        },
    };
    return o43;
}
let v44 = f29(v27, 481111932, 129, v25);
f29(10, 481111932, 10, f29);
f29(v44, v27, 481111932, v27);
v44.g;
try {
    let v48;
    try { v48 = v44.isSealed(); } catch (e) {}
    v44 = v48;
    v27 = v48;
} catch(e49) {
    e49[0] = e49;
    try { e49(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);

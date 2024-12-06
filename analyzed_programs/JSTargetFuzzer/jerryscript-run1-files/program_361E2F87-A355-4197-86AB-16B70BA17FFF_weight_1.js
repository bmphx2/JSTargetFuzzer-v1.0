const v1 = new Date();
new Uint16Array(2062);
new Float64Array(3255);
new Uint32Array(7);
const v13 = new Array(10);
let v15 = 4096;
function f17(a18, a19, a20, a21) {
    const o31 = {
        "g": v15,
        ...a21,
        "e": a19,
        set b(a23) {
            function F24(a26, a27) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a26;
            }
            new F24(a21, 129);
            new F24(a20, a20);
            new F24(F24, 481111932);
        },
    };
    return o31;
}
let v32 = f17(v15, 481111932, 129, v13);
f17(10, 481111932, 10, f17);
f17(v32, v15, 481111932, v15);
v32.g;
try {
    let v36;
    try { v36 = Array.isSealed(); } catch (e) {}
    v32 = v36;
    v15 = v36;
} catch(e37) {
    e37[0] = e37;
    try {
    const t0 = 10;
    t0(Array);
    } catch (e) {}
}
new Int32Array(1959);
new Int32Array(v1);
new Int32Array(213);

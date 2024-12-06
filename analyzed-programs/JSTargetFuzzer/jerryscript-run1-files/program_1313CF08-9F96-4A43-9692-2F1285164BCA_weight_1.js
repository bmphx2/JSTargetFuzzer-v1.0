new WeakMap();
const v14 = new Array(10);
let v16 = 4096;
function f18(a19, a20, a21, a22) {
    const o32 = {
        "g": v16,
        ...a22,
        "e": a20,
        set b(a24) {
            function F25(a27, a28) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a27;
            }
            new F25(a22, 129);
            new F25(a21, a21, a22);
            new F25(F25, 481111932);
        },
    };
    return o32;
}
let v33 = f18(v16, 481111932, 129, v14);
f18(10, 481111932, 10, f18);
f18(v33, v16, 481111932, v16);
v33.g;
try {
    let v37;
    try { v37 = v33.isSealed(0, 129); } catch (e) {}
    v33 = v37;
    v16 = v37;
} catch(e38) {
    e38[0] = e38;
    try { e38(Array); } catch (e) {}
}
new Int32Array(1959);
new Float64Array(512);
new Int16Array(213, 129, Int16Array);

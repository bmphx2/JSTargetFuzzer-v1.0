function f3() {
    return 4294967295;
}
const v12 = new Array(268435441);
let v14 = 4096;
function f16(a17, a18, a19, a20) {
    const o30 = {
        "g": v14,
        ...a20,
        "e": a18,
        set b(a22) {
            function F23(a25, a26) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a25;
            }
            new F23(a20, 129);
            new F23(a19, a19);
            new F23(F23, 481111932);
        },
    };
    return o30;
}
let v31 = f16(v14, 481111932, 129, v12);
f16(268435441, 481111932, 268435441, f16);
f16(v31, v14, 481111932, v14);
v31.g;
try {
    let v35;
    try { v35 = v31.isSealed(); } catch (e) {}
    v31 = v35;
    v14 = v35;
} catch(e36) {
    e36[0] = e36;
    try { e36(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512, -3);
new Int16Array(213);

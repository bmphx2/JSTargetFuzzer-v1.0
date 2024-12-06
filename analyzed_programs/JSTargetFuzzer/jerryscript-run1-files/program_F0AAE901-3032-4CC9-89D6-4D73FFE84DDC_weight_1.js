function F4() {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7) {
        try { new a7(); } catch (e) {}
        return a7;
    }
    f6(F4);
}
new F4();
new Int8Array(9);
new Float32Array(9);
new Float32Array(4096);
function f23(a24, a25, a26, a27) {
    const o28 = {
    };
    return o28;
}
const v29 = f23();
const v30 = f23(f23, v29, f23, "h");
let v32 = 5;
const v33 = ("h").length;
257 + v30;
v29.g = v32 = v33;

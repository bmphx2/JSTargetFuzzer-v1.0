new WeakSet();
new Int8Array(8);
new Int16Array(9);
new Float64Array(3648);
function f18(a19, a20, a21, a22) {
    const v24 = new Set();
    function F25(a27, a28) {
        if (!new.target) { throw 'must be called with new'; }
        try { v24.forEach(a28, v24); } catch (e) {}
    }
    new F25();
    const o31 = {
    };
    return o31;
}
const v32 = f18();
const v33 = f18(f18, v32, f18, "h");
let v35 = 5;
const v36 = ("h").length;
257 && v33;
v32.g = v35 = v36;

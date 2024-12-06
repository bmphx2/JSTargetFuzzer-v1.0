try { Uint16Array(); } catch (e) {}
new Float32Array(4);
new Uint8ClampedArray(1024);
new Float32Array(214);
const v17 = ["object",Symbol.match];
function F18(a20) {
    if (!new.target) { throw 'must be called with new'; }
}
const v21 = new F18();
async function f22(a23, a24) {
    a23[v17] = a23;
    return a24;
}
f22(v21);

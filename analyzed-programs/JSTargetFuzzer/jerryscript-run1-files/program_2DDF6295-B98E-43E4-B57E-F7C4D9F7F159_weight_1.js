new URIError(2);
new Uint16Array(2);
new Int32Array(6);
new Uint32Array(6);
new Float32Array(8);
new Int16Array(64);
function f21(a22, a23, a24) {
    return arguments.callee;
}
const v27 = f21(f21, f21, f21);
let v28 = [v27,v27,v27];
class C29 {
    padStart(a31, a32) {
        let v33;
        try { v33 = a32(); } catch (e) {}
        ({"b":v28,"e":a31,} = v33);
    }
}
const v34 = new C29();
async function f35(a36, a37) {
    a36 /= C29;
    return 94;
}
f35(v34);

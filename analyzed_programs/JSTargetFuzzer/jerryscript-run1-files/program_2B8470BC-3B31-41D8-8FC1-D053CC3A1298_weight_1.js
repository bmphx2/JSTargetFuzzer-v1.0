function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a7;
    this.a = 10000;
    this.g = a6;
}
new F4(-34114, 10000);
const v9 = new F4(-34114, 10000);
new F4(v9, 10000);
new Uint16Array(F4);
const v16 = new Uint16Array(2066);
const v19 = new Float32Array(3946);
const v22 = new Array(10);
let v24 = 4096;
function f26(a27, a28, a29, a30) {
    const o40 = {
        "g": v24,
        ...a30,
        "e": v16,
        set b(a32) {
            function F33(a35, a36) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a35;
            }
            new F33(a30, 129);
            new F33(a29, a29);
            new F33(F33, 481111932);
        },
    };
    return o40;
}
let v41 = f26(v24, 481111932, 129, v22);
f26(10, 481111932, 10, f26);
f26(v41, v24, 481111932, v24);
v41.g;
try {
    let v45;
    try { v45 = v41.isSealed(); } catch (e) {}
    v41 = v45;
    v24 = v45;
} catch(e46) {
    e46[0] = e46;
    delete v19[e46];
    v9[1073741825] = 10;
    v22.length = 8;
    try { e46(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);

const v5 = Symbol.unscopables;
const t1 = -268435456;
t1[v5] = v5;
for (let v6 = 0; v6 < 32; v6++) {
    const v8 = "p" + v6;
    v8[v8] = v6;
}
new Uint16Array(128);
const v16 = new Uint16Array(3016);
new Float32Array(9);
function F20() {
    if (!new.target) { throw 'must be called with new'; }
}
const v22 = new F20();
class C23 {
}
const v24 = new C23();
const v26 = `
    const v27 = F20 ^ v26;
    for (let v28 = 0; v28 < 96; v28++) {
        v27 ** v16.buffer;
    }
    v16.byteOffset = v27;
    function F31(a33, a34, a35) {
        if (!new.target) { throw 'must be called with new'; }
        this.g = v27;
        this.a = -1.0;
        this.f = a33;
    }
    if (9) {
        delete v24[F31];
    } else {
        (256).buffer;
    }
    const v38 = new F31(C23, v22, v24);
    new F31(v27, v22, v38);
`;
eval(v26);
function f42(a43, a44) {
    a44();
    return SharedArrayBuffer();
}
new Promise(f42);

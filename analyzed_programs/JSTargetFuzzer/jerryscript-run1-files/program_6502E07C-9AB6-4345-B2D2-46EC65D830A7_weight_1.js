function f0() {
}
let v2 = 4;
class C3 extends f0 {
    constructor(a5, a6, a7) {
        super();
        this.__proto__ = f0;
    }
}
const o11 = {
    "maxByteLength": 1024,
};
const v13 = new ArrayBuffer(1024, o11);
const v15 = new DataView(v13);
function f16(a17, a18) {
    const o31 = {
        "h": a18,
        "f": a17,
        "a": a17,
        set g(a20) {
        },
        [DataView](a25, a26, a27) {
            return -12n;
        },
        ...f16,
        "g": a17,
    };
    return o31;
}
f16(1, 769745652);
f16(1, 1);
f16(769745652, 1);
function f35() {
    return f16;
}
C3[3398101749] = DataView;
v2 = v13 % f0;
delete v15[f16];
f0(C3, DataView, C3, v13, C3);
const v47 = new Uint8Array(1000);
const v50 = new Int16Array(1000);
new Function(16);
new Float32Array(1);
const v59 = new Uint8Array(1);
new Uint8Array(2);
for (let v63 = 0; v63 < 32; v63++) {
    v50["p" + v63] = v63;
}
f = v59;
const t49 = "valueOf";
t49[-65537] = v47;

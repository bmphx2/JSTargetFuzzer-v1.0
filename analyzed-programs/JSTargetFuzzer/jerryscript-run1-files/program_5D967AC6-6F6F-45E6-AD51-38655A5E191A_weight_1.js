function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a6;
    new ArrayBuffer();
    const v10 = new Float32Array();
    const v13 = new RegExp(3);
    v10[v13];
    this.c = -2147483649n;
    a5.h = -2147483649n;
}
const v15 = new F3(-2147483649n, 64909n);
const v16 = new F3(-2147483649n, 1049734811n);
const v17 = new F3(64909n, -2147483649n);
function f18(a19, a20, a21, a22) {
    const o29 = {
        ...v15,
        [v15]: v17,
        "c": a22,
        get a() {
            try {
                super.isSafeInteger(a19, a22, this, this, v16);
            } catch(e25) {
            }
            return -9;
        },
        [1049734811n]: v16,
        ...v17,
    };
    return o29;
}
f18(1049734811n, v17, v16, v15);
f18(1049734811n, v16, v16, v15);
const v32 = f18(1049734811n, v17, v15, v17);
function F36(a38, a39, a40) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a40;
    this.g = a39;
    this.c = a40;
}
const v41 = new F36(v17, 1049734811n, v15);
new F36(v15, -2147483649n, v41);
new F36(v15, 1049734811n, v32);
let v44 = 0n;
for (let v45 = 0; v45 < 5; v45++) {
    v44 -= 9223372036854775807n;
}

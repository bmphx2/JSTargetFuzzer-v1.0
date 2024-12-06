const v2 = new Uint32Array(7);
new Int32Array(3);
new Uint8Array(189);
function f9(a10, a11) {
    const o21 = {
        get b() {
            const v13 = a11 | Uint8Array;
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                this.c = Uint8Array;
            }
            new F14(a10, 3);
            new F14(F14, v13);
            new F14(v13, a10);
            return a11;
        },
        "g": a11,
    };
    return o21;
}
const v22 = f9(189, 7);
f9(189, Uint32Array);
for (const v25 in f9(3, v2)) {
    v25 || v25;
}
for (let v30 = 0; v30 < 32; v30++) {
    v22["p" + v30] = v30;
}

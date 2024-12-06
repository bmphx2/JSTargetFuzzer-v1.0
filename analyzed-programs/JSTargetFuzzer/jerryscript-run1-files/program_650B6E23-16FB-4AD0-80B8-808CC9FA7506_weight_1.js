const v14 = new Array(10);
let v16 = 4096;
function f18(a19, a20, a21, a22) {
    const o32 = {
        "g": v16,
        945077458: 65536,
        "a": -59812,
        "h": 65536,
        "e": a19,
        "c": 129,
        ...a22,
        "e": a20,
        set b(a24) {
            function F25(a27, a28) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a27;
            }
            new F25(a22, 129);
            new F25(a21, a21);
            new F25(F25, 481111932);
        },
    };
    return o32;
}
let v33 = f18(v16, 481111932, 129, v14);
v33 !== -59812;
for (let v35 = 0; v35 < 32; v35++) {
    v14["p" + v35] = v35;
}
f18(10, 481111932, 10, f18);
f18(v33, v16, 481111932, v16);
v33.g;
for (let v41 = 0; v41 < 14; v41++) {
}
try {
    let v45;
    try { v45 = v33.isSealed(); } catch (e) {}
    v33 = v45;
    v16 = v45;
} catch(e46) {
    e46[0] = e46;
    try { e46(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);

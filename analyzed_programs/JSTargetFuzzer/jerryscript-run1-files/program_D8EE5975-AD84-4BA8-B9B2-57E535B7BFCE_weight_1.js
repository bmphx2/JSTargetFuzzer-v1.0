[["-536870912"],"bigint"];
["bigint"];
const v17 = new Array(10);
let v19 = 4096;
function f21(a22, a23, a24, a25) {
    const o35 = {
        "g": v19,
        ...a25,
        "e": a23,
        set b(a27) {
            function F28(a30, a31) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a30;
            }
            new F28(a25, 129);
            new F28(a24, a24);
            new F28(F28, 481111932);
        },
    };
    return o35;
}
let v36 = f21(v19, 481111932, 129, v17);
for (let i38 = 0; i38 < 8; i38++) {
    typeof i38;
}
f21(10, 481111932, 10, f21);
f21(v36, v19, 481111932, v19);
v36.g;
try {
    let v48;
    try { v48 = v36.isSealed(); } catch (e) {}
    v36 = v48;
    v19 = v48;
} catch(e49) {
    e49[0] = e49;
    try { e49(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);

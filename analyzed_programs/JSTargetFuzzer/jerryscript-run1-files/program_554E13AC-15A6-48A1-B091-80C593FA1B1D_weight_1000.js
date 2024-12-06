const v2 = new Array(10);
let v4 = 4096;
function f6(a7, a8, a9, a10) {
    const o20 = {
        "g": v4,
        ...a10,
        "e": a8,
        set b(a12) {
            function F13(a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a15;
            }
            new F13(a10, 129);
            new F13(a9, a9);
            new F13(F13, 481111932);
        },
    };
    return o20;
}
let v21 = f6(v4, 481111932, 129, v2);
f6(10, 481111932, 10, f6);
f6(v21, v4, 481111932, v4);
v21.g;
try {
    let v25;
    try { v25 = v21.isSealed(); } catch (e) {}
    v21 = v25;
    v4 = v25;
} catch(e26) {
    e26[0] = e26;
    try { e26(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);

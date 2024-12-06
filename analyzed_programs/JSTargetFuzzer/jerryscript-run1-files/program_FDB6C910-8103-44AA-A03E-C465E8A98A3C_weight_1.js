const v4 = new WeakSet();
function f5(a6) {
    const o7 = {
        3330824884: -351357704,
        "c": a6,
        "h": v4,
        ...v4,
        "d": a6,
        "a": a6,
        [a6]: v4,
        ...v4,
        "f": 536870912,
        "b": a6,
        4294967296: v4,
        "e": 536870912,
        "g": WeakSet,
    };
    return o7;
}
f5(-351357704);
f5(536870912);
f5(536870912);
new Int32Array(257);
new Uint32Array(1024);
new BigUint64Array(64);
const v22 = new Array(10);
let v24 = 4096;
function f26(a27, a28, a29, a30) {
    const o40 = {
        "g": v24,
        ...a30,
        "e": a28,
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
    try { e46(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);

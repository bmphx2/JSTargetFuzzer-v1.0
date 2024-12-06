const v2 = new Int8Array(129);
new Uint16Array(374);
const v9 = 1024 % 1024;
1024 << 9007199254740991;
const v11 = ~1024;
9007199254740991 || v11;
!v11;
const v15 = new Uint32Array(1024);
const v17 = new WeakMap();
function f18(a19, a20, a21, a22) {
    const o30 = {
        [Int8Array](a24, a25, a26, a27) {
            a26 = a22;
            !a25;
            const v29 = new WeakMap(v2);
            v29[2200] = a26;
            return v29;
        },
        [a19]: v15,
        4096: a21,
        "c": a19,
        "d": v17,
        "f": a19,
        8: v9,
        "h": v15,
        ...a21,
        "g": WeakMap,
        "a": a21,
        "d": v2,
    };
    return o30;
}
f18(1024, 374, 374, 129);
f18(374, 1024, 129, 1024);
f18(129, 129, 129, 129);
const v38 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
try { v38("o"); } catch (e) {}

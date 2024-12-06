const v2 = new WeakSet();
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v2;
    this.b = a5;
}
const v6 = new F3(F3);
const v7 = new F3(v2);
const v8 = new F3(v7);
new Map();
function f14() {
    return v2;
}
function f15(a16, a17, a18) {
    const o27 = {
        "a": v7,
        m(a20, a21, a22) {
            const v23 = v8[2156583167];
            v23[3188056167] -= a17;
            v2.toString = v23;
            return a16;
        },
        [-1.1280740948832425e+308]: F3,
        set c(a25) {
            try { new a25(Map, 735522.1944435353, WeakSet, this, v8); } catch (e) {}
        },
        ...v6,
        ...v8,
        "f": -1.3278386796182357e+308,
    };
    return a18;
}
f15(v6, -1.1280740948832425e+308, v6);
f15(v7, -1.3278386796182357e+308, v6);
f15(v6, 735522.1944435353, v7);
try {
} finally {
    function F34(a36, a37, a38, a39) {
        if (!new.target) { throw 'must be called with new'; }
        function F40(a42, a43, a44, a45) {
            if (!new.target) { throw 'must be called with new'; }
        }
        F40(9223372036854775807, -19870386, -65537n, F34);
    }
}

for (let i5 = 0; i5 < 4; i5++) {
    const t1 = 10n;
    t1.toString = 9223372036854775807;
    try { i5(i5, 9223372036854775807, 9223372036854775807, 10n); } catch (e) {}
}
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    a22.f = a20;
    a22.d = "boolean";
    for (let v26 = 0; v26 < 32; v26++) {
        a22["p" + v26] = v26;
    }
}
const v29 = new F17("R9F0", -268435456n, "boolean", "R9F0");
new F17(-268435456n, -268435456n, v29, "boolean");
const v31 = new F17(10n, -268435456n, "R9F0", "-7392");
class C32 {
    static set c(a34) {
        try {
            super.m(v31, a34, 26759);
        } catch(e36) {
        }
        v31.length = 210;
        (a34 = this).__proto__;
    }
}

function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function f6(a7, a8) {
    let v10 = [-5.0,-1.0,0.12962519354005442,-408.5946067459894,363680.54708949546,-508042.05649336474,-360915.6470760817];
    v10.valueOf = -9007199254740991;
    v10 /= v10;
    const o18 = {
        "g": v3,
        [f0](a12, a13, a14) {
            try { this.valueOf(a14, f0, a14, a14); } catch (e) {}
            try {
                super.fromEntries();
            } catch(e17) {
            }
            return v4;
        },
        [a7]: v4,
        ...v4,
        "c": v5,
        "h": F1,
        [a8]: f0,
    };
    return o18;
}
f6(v3, v4);
f6(F1, v5);
f6(f0, v5);
new WeakMap();
Float64Array.from(RegExp(RegExp));

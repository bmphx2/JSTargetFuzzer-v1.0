function f5(a6) {
    const o14 = {
        get a() {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const t6 = F8(F8, a6);
            t6(a6);
            return F8;
        },
    };
    return a6;
}
f5(f5);
[54783,-268435456,46487,11,-1059659455,16,65537];
gc(10000);
new Uint8Array(129);
new Float32Array(7);
new Int8Array(9);
function f36() {
    let v39 = "message";
    const o44 = {
        get a() {
            let v41;
            try { v41 = this("223928331", this, 5.662791040550411e+307); } catch (e) {}
            v39 = v41;
            try {
                super.n();
            } catch(e43) {
            }
            return 5.662791040550411e+307;
        },
        3207: 5.662791040550411e+307,
        3681: v39,
    };
    return o44;
}
const v45 = f36();
f36();
const v47 = f36();
function F51(a53, a54, a55) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a53;
    this.d = 1073741825;
}
const v56 = new F51(v47, v47, 3);
const v57 = new F51(v56, v45, 3);
new F51(v45, v57, -31282);
new Uint32Array(4050);
new Uint8ClampedArray(4055);
new Uint16Array(134);

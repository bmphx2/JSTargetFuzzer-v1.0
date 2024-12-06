function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a6;
    this.f = a5;
    this.b = "h1";
}
new F3("search", "h1");
new F3("h1", "search");
new F3("-13", "search");
function f16() {
    let v19 = "message";
    const o24 = {
        get a() {
            let v21;
            try { v21 = this("223928331", this, 5.662791040550411e+307); } catch (e) {}
            v19 = v21;
            try {
                super.n();
            } catch(e23) {
            }
            return 5.662791040550411e+307;
        },
        3207: 5.662791040550411e+307,
        3681: v19,
    };
    return o24;
}
const v25 = f16();
f16();
const v27 = f16();
function F31(a33, a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a33;
    this.d = 1073741825;
}
const v36 = new F31(v27, v27, 3);
const v37 = new F31(v36, v25, 3);
new F31(v25, v37, -31282);
new Uint32Array(4050);
new Uint8ClampedArray(4055);
new Uint16Array(134, "search");

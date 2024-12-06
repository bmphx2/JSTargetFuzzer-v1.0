function f0() {
    const o11 = {
        p(a5) {
            this.h = this;
            try {
                super.p(NaN, a5);
            } catch(e7) {
            }
            return this;
        },
        "f": "-2",
        "g": "-2",
        "c": "-2",
        "a": "-2",
        "e": -1000000.0,
        "d": NaN,
        __proto__: "-2",
        "b": -1000000.0,
        "h": "-2",
        "b": "-2",
        2: "-2",
        "e": NaN,
        "h": "-2",
        [-1000000.0]: f0,
        ..."-2",
        "d": f0,
        [f0]: f0,
        ..."-2",
        "c": -1000000.0,
    };
    Object.defineProperty(o11, "-2", { set: f0 });
    delete o11[9];
    return o11;
}
const v16 = f0();
const v17 = f0();
const v18 = f0();
[4.0,1000000.0,0.4328109271332956,177.50531589916136,-1000000000.0,397.92630013767416,0.46055233891794267,1000000000.0];
[-1e-15,0.3560995741310822,-1000000000000.0,-708900.1810697287,-187611.7640676829,-5.2969018055473445,-8.370498577389466];
[-0.0,924271.9106718549,1.0,359.0311610897704,0.43254505384219544];
function F28(a30, a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a31;
    this.c = v17;
    this.d = f0;
}
new F28("MAX_VALUE", v16, "MAX_VALUE");
new F28("MAX_VALUE", v18, "bigint");
new F28("MAX_VALUE", v16, "c");
function F37() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = false;
}
new F37();
const v42 = new Int8Array(1000);
for (const v43 in v42) {
    const v45 = v43 * v43;
    v45 * (-7 & v45);
}

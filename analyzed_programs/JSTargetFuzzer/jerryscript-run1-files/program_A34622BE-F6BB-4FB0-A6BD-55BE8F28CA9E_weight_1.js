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
    return o11;
}
const v12 = f0();
const v13 = f0();
const v14 = f0();
[4.0,1000000.0,0.4328109271332956,177.50531589916136,-1000000000.0,397.92630013767416,0.46055233891794267,1000000000.0];
[-1e-15,0.3560995741310822,-1000000000000.0,-708900.1810697287,-187611.7640676829,-5.2969018055473445,-8.370498577389466];
[-0.0,924271.9106718549,1.0,359.0311610897704,0.43254505384219544];
function F24(a26, a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a27;
    this.c = v13;
    this.d = f0;
}
new F24("MAX_VALUE", v12, "MAX_VALUE");
new F24("MAX_VALUE", v14, "bigint");
new F24("MAX_VALUE", v12, "c");
function F33() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = false;
}
new F33();
const v38 = new Int8Array(1000);
for (const v39 in v38) {
    const v41 = v39 * v39;
    v41 * (-7 & v41);
}

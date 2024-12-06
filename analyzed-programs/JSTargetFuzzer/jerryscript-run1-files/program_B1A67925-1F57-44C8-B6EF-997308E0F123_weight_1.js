function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    let {"c":v7,"h":v8,} = this;
    new Uint32Array(124);
    new BigInt64Array(3);
    new BigUint64Array(512);
    this.a = "E";
    this.d = "-46930";
    this.f = a5;
}
const v18 = new F3("-21431", "E");
const v19 = new F3("-21431", "-21431");
const v20 = new F3("-46930", "E");
function f21(a22, a23, a24, a25) {
    const o30 = {
        "e": v20,
        get c() {
            for (let v27 = 0; v27 < 32; v27++) {
                a22["p" + v27] = v27;
            }
            return a24;
        },
        "a": a23,
        "f": a25,
    };
    return o30;
}
f21("-46930", v18, F3, "-46930");
f21("-46930", v19, f21("E", v20, v19, "-21431"), "-21431");
async function f35(a36, a37, a38) {
    new ArrayBuffer(-4294967296);
    return ArrayBuffer;
}
f35();

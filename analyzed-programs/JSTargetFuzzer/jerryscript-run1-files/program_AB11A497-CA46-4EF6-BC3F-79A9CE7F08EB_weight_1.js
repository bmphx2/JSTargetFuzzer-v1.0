function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 10;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v5;
    a8.a = v3;
    this.b = a8;
}
const v9 = new F6(v4);
const v10 = new F6(v4);
new F6(v3);
function f12(a13, a14) {
    const o22 = {
        p(a16, a17, a18) {
            for (let v19 = 0; v19 < 32; v19++) {
                this["p" + v19] = v19;
            }
            return v10;
        },
        ...a13,
        [v10]: v10,
        "e": a13,
        "c": F0,
        "d": a13,
    };
    return o22;
}
f12(v5, v9);
f12(v4, f12(v3, v9));
function f30() {
    return f30;
}
function f31(a32) {
    const o33 = {
    };
    return o33;
}
const v34 = f31();
async function f35(a36, a37, a38) {
    new Object(3);
    const v43 = `
        Object.defineProperty(v34, "a", { writable: true, configurable: true, get: f30 });
        const v44 = f31 % 31874;
        +v44;
        -9223372036854775807 * v44;
    `;
    eval(v43);
    return eval;
}
f35();

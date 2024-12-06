function f0() {
    const o10 = {
        "f": 10,
        96: 2.220446049250313e-16,
        __proto__: -1024,
        12: 10,
        ...-1024,
        [2.220446049250313e-16]: 10,
        set b(a5) {
            super.h;
            let v8;
            try { v8 = f0["setUTCDate"](2.220446049250313e-16, "setUTCDate", 10); } catch (e) {}
            -1024 >> v8;
        },
        "b": -1024,
        "a": -1024,
    };
    return o10;
}
const v11 = f0();
const v12 = f0();
const v13 = f0();
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v11;
    this.g = a16;
}
new F14(v12, v13);
new F14(v13, v11);
new F14(v12, v13);
new Array(9);
const v35 = new Uint32Array(2334);
new Uint32Array(4);
new Int16Array(129);
const v45 = `
    Uint32Array >= Uint32Array;
    let v47;
    try { v47 = v35.join(v45); } catch (e) {}
    v47[v47];
`;
eval(v45);

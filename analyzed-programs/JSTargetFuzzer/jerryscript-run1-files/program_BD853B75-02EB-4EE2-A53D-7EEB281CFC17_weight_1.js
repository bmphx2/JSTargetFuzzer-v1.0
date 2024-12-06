function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 9;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f10(a11, a12, a13) {
    const o19 = {
        get h() {
            let v15;
            try {
            const t0 = "vT";
            v15 = t0(this);
            } catch (e) {}
            for (let v16 = 0; v16 < 32; v16++) {
                v15["p" + v16] = v16;
            }
            return v4;
        },
        "f": v5,
        "b": null,
    };
    return o19;
}
f10("e", v3, v5);
f10("object", v4, v4);
f10("object", v4, v5);
const v25 = new Uint32Array(181);
let v27 = BigUint64Array;
let v28 = new v27(1);
let v29 = 253;
[v29,,v27,v28] = v25;
try { v27["abs"](181, v29, v27); } catch (e) {}
new Uint16Array(v29);
function F41(a43, a44, a45) {
    if (!new.target) { throw 'must be called with new'; }
}
const v46 = new F41(F41, F41, F41);
function f47() {
    return v46;
}
class C48 extends f47 {
    constructor(a50, a51) {
        switch (a50) {
            case a51:
                break;
            default:
                break;
            case v46:
                break;
        }
    }
}
for (let i53 = 0; i53 < 2; i53++) {
    const v59 = new Function("x");
    v59.name;
}
Function();

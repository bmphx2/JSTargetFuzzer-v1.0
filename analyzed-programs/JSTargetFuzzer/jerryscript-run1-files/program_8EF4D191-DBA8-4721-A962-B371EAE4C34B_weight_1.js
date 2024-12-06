function f0() {
    let v3 = -4.0;
    const o16 = {
        __proto__: "valueOf",
        "b": v3,
        ..."valueOf",
        get h() {
            let v4 = this;
            ({"b":v3,"d":v3,...v4} = v4);
            try { v3.is(); } catch (e) {}
            return v4;
        },
        128: f0,
        m(a7, a8) {
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = a12;
            }
            new F9(F9, v3);
            new F9("valueOf", "valueOf");
            const v15 = new F9(a8, v3);
            return v15;
        },
    };
    return o16;
}
f0();
f0();
f0();
new Array(1);
function F26(a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    const v31 = [268435441n,268435441n,268435441n];
    try { v31.copyWithin(21610, -549482487, 268435441n); } catch (e) {}
    this.d = a29;
    this.g = a29;
}
new F26(-536870912n, 3n);
new F26(3n, 3n);
const v37 = new F26(4294967297n, -536870912n);
function f40(a41, a42, a43, a44) {
    const o45 = {
    };
    return v37;
}
const v46 = f40();
const v47 = f40(f40, v46, f40, "h");
let v49 = 5;
const v50 = ("h").length;
257 + v47;
v46.g = v49 = v50;
let v52 = 58354n;
(v52 <<= 39655n) | v52;

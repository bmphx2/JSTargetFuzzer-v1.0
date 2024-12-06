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
    this.d = a29;
    this.g = a29;
}
new F26(-536870912n, 3n);
new F26(3n, 3n);
const v32 = new F26(4294967297n, -536870912n);
function f35(a36, a37, a38, a39) {
    const o40 = {
    };
    return v32;
}
const v41 = f35();
const v42 = f35(f35, v41, f35, "h");
let v44 = 5;
const v45 = ("h").length;
257 + v42;
v41.g = v44 = v45;
let v47 = 58354n;
(v47 <<= 39655n) | v47;

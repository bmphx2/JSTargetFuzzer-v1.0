function f0() {
    const o10 = {
        set c(a5) {
            let {"e":v6,"f":v7,"g":v8,...v9} = a5;
            v9.toString = a5;
        },
        "b": 9007199254740992,
        "e": "BC",
        [-9.170048012059593e+307]: -9.170048012059593e+307,
        [9007199254740992]: -9.170048012059593e+307,
        "d": 9007199254740992,
        ["BC"]: -9.170048012059593e+307,
        __proto__: "BC",
        5: "BC",
        ..."BC",
    };
    return o10;
}
const v11 = f0();
const v12 = f0();
const v13 = f0();
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a16;
}
new F14(F14, v11);
new F14(F14, v11);
new F14(v13, v12);
new Date();
typeof F14 === "undefined";
const v32 = -Infinity;
Math.cbrt(-7);
-1022606903 + "undefined";
!1;
"undefined" / v32;
-65536 - -65536;

let v0 = -256;
function f7(a8, a9, a10, a11) {
    const o23 = {
        "g": "valueOf",
        get h() {
            this.__proto__ = "4";
            return a11;
        },
        [a11]: a10,
        "f": a8,
        "e": "multiline",
        ..."4",
        set a(a14) {
            const v21 = !a9;
            try { new a14("number", "1073741823", a10, "number", v21); } catch (e) {}
        },
    };
    return o23;
}
f7("4", "4", -9007199254740992, "multiline");
f7("valueOf", "valueOf", v0, "valueOf");
f7("4", "valueOf", -9007199254740992, "valueOf");
[-9007199254740992,11,-1938991561,2147483649,56177,-4096,55984,13];
const v28 = [-1570187277,1811715032,0,1909360796,9,-35674,1250091504,536870912,23845];
const v29 = [4,-58385,8];
function f33(a34, a35, a36, a37) {
    v0 = 7;
    const v39 = f7("4", "valueOf", 268435441, "4");
    try { v39.cosh(v39); } catch (e) {}
    return "valueOf";
}
f33(v29, v29, v29, v28);

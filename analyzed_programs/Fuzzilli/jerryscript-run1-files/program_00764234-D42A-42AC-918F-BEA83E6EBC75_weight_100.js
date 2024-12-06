function f6(a7, a8) {
    const o15 = {
        2147483647: a8,
        230: 29123n,
        "a": "Ubi",
        "e": 9007199254740992n,
        ..."d",
        ["Ubi"](a10, a11) {
            [[a10,"Ubi",a8],9007199254740992n,this,[a8],"d"];
            return 9007199254740992n;
        },
        "f": "Ubi",
    };
    return o15;
}
const v16 = f6(9007199254740992n, 5n);
f6(9007199254740992n, 29123n);
const v18 = f6(5n, 5n);
function f19(a20, a21) {
    const o26 = {
        16: "Ubi",
        "g": a21,
        4294967295: v16,
        get e() {
            try {
                super.setHours();
            } catch(e24) {
            }
            Object.defineProperty(a20, 16, { writable: true, configurable: true, get: f6, set: f6 });
            this && "2yx";
            return a20;
        },
    };
    return o26;
}
const v27 = f19("2yx", "d");
const v28 = f19("Ubi", "2yx");
const v29 = f19("d", "2yx");
function F30(a32, a33, a34) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a34;
    this.e = a34;
    this.c = a33;
}
const v35 = new F30("2yx", v28, 29123n);
new F30("2yx", v29, 5n);
new F30("2yx", v27, 9007199254740992n);
v35 | v18;
let {"e":v39,"g":v40,} = v28;

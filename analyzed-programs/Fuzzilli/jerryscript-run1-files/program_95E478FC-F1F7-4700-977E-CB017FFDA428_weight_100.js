let v0 = "boolean";
function f3(a4) {
    const o11 = {
        "e": a4,
        "g": "caller",
        "d": a4,
        [a4]: a4,
        ...a4,
        get b() {
            let v6 = 0;
            while (v6 < 8) {
                a4.length = v6;
                a4 = "lDDC";
                ("caller").length;
                v6++;
            }
            return v6;
        },
    };
    return o11;
}
f3("caller");
f3(v0);
const v14 = f3("lDDC");
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a18;
    this.a = "lDDC";
}
const v19 = new F15(v0, "caller");
const v20 = new F15("caller", "caller");
new F15("caller", v0);
const v25 = ("lDDC")[-43999n];
v14.valueOf = v25;
Object.defineProperty(v20, 0, { enumerable: true, get: f3 });
if (v25) {
    v0 = "lDDC";
} else {
    let v26;
    try { v26 = new v25(-128n, v19); } catch (e) {}
    v26 ^= v19;
}
("caller")["repeat"](v25);

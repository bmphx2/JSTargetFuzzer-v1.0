function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -4;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f9(a10, a11, a12) {
    const o15 = {
        __proto__: a10,
        "d": a12,
        set e(a14) {
            this.d = a14;
            a14[6] = this;
        },
        "e": -1667n,
        [-48480n]: a10,
        "h": -48480n,
        7: v3,
    };
    return o15;
}
f9(v3, -1667n, v4);
f9(v3, -1667n, v5);
f9(v5, F0, -48480n);
const v22 = [10,-59236,257,-1796961118,9007199254740992,-9007199254740990];
const v23 = [6,-7517,644864686,-9007199254740991,0,9007199254740991,-1,6138];
const v24 = [16,-36818,14,256];
function F29(a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = "OsvPg";
    switch ("getOwnPropertyDescriptor") {
        default:
            break;
    }
}
new F29(v24, "1073741823");
const v35 = new F29(v23, "bkq");
new F29(v23, v35);
try { ("bkq").localeCompare("OsvPg"); } catch (e) {}
const t40 = "1073741823";
t40.length = 15759;
for (const v42 in "w1f") {
    ("bkq")[v42];
}
("bkq")[F29];
function f45() {
    return v22;
}

function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 37413;
    this.d = -239928771;
    this.e = -239928771;
}
const v7 = new F3(536870912, 37413);
const v8 = new F3(-239928771, 37413);
const v9 = new F3(536870912, -239928771);
function f13(a14, a15, a16) {
    const o29 = {
        set g(a18) {
            delete a16[this];
            for (let v20 = 0; v20 < 32; v20++) {
                v7["p" + v20] = v20;
            }
        },
        p(a24, a25) {
            const v26 = a14[3];
            function f27() {
                return v9;
            }
            a16.__proto__;
            return v26;
        },
    };
    return o29;
}
f13(v8, -239928771, v7);
f13(v8, 4096n, v8, f13(v9, v9, v9));
const v39 = [10,-59236,257,-1796961118,9007199254740992,-9007199254740990];
const v40 = [6,-7517,644864686,-9007199254740991,0,9007199254740991,-1,6138];
const v41 = [16,-36818,14,256];
function F46(a48, a49) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = "OsvPg";
}
new F46(v41, "1073741823");
const v51 = new F46(v40, "bkq");
new F46(v40, v51);
try { ("bkq").localeCompare("OsvPg"); } catch (e) {}
const t41 = "1073741823";
t41.length = 15759;
for (const v58 in "w1f") {
    ("bkq")[v58];
}
("bkq")[F46];
function f61() {
    return v39;
}

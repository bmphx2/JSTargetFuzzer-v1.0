function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a5;
    this.growable = 1000;
}
const v7 = new F3(13, F3);
new F3(13, -2147483649, 13, 13, -2147483649);
new F3(-2147483649, -2147483649);
class C13 extends F3 {
    static c = "h";
    set g(a15) {
        throw 1000;
        a15.c = 0;
        const v18 = gc.iterator;
        const o27 = {
            [v18]() {
                let v20 = 10;
                const o26 = {
                    next() {
                        v20--;
                        const v24 = a15 == 0;
                        const o25 = {
                            "done": v24,
                            "value": v20,
                        };
                        return v7;
                    },
                };
                return o26;
            },
        };
    }
}
new C13();
new C13();
new C13();
const v34 = [2074,-793654765,8,9223372036854775807,16,512,-39130,-2147483648,5];
const v35 = [6,-7517,644864686,-9007199254740991,0,9007199254740991,-1,6138];
const v36 = [16,-36818,14,256];
function F41(a43, a44) {
    if (!new.target) { throw 'must be called with new'; }
    F41.g = "OsvPg";
}
new F41(v36, "1073741823");
const v46 = new F41(v35, "p");
new F41(v35, v46);
try { ("p").localeCompare("OsvPg"); } catch (e) {}
const t47 = "1073741823";
t47.length = 1000;
for (const v53 in 1000) {
    ("p")[v53];
}
("p")[F41];
function f56() {
    return v34;
}

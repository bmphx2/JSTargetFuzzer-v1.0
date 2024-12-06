function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -1;
    this.source = -1;
    this.h = -1;
}
new F0(F0);
const v4 = new F0();
const v5 = new F0();
function f9(a10, a11) {
    const o21 = {
        "e": a10,
        536870888: "-1278455341",
        [v4]: "-1278455341",
        valueOf(a13, a14, a15, a16) {
            return F0;
        },
        __proto__: v5,
        "buffer": a10,
        [a11]: F0,
    };
    return o21;
}
f9("-1278455341", "object");
f9("string", "-1278455341");
f9("string", "string");
const v31 = [6];
const v32 = [6,-7517,644864686,-9007199254740991,0,9007199254740991,-1,6138];
const v33 = [16,-36818,14,256];
function F38(a40, a41) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = "OsvPg";
}
new F38(v33, "1073741823");
const v43 = new F38(v32, "bkq", v5, v33);
new F38(v32, v43);
try { ("bkq").localeCompare("OsvPg"); } catch (e) {}
const t37 = "1073741823";
t37.length = -1502679894;
for (const v50 in "0") {
    ("bkq")[v50];
}
("bkq")[F38];
function f53() {
    return v31;
}

function f3(a4) {
    const o17 = {
        2147483647: 268435439,
        65535: 268435439,
        "a": 10,
        "g": 12248,
        8: 10,
        "f": 12248,
        __proto__: a4,
        "h": a4,
        ...a4,
        "c": 268435439,
        ...a4,
        get c() {
            super.e = a4;
            10 && 10;
            const o12 = {
                "maxByteLength": 93,
            };
            const v14 = new SharedArrayBuffer(93, o12);
            new Int16Array(v14);
            return v14;
        },
    };
    return o17;
}
const o20 = {
    valueOf() {
        return 268435439;
    },
};
const v21 = f3(268435439);
const v22 = f3(10);
const v23 = f3(12248);
function F24(a26, a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v22;
    this.c = 12248;
}
new F24(v22, 10, v22, v23);
const v31 = new F24(v23, 12248, v21, v22);
new F24(v21, 268435439, v23, v31);
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
const t53 = "1073741823";
t53.length = 15759;
for (let v58 in "w1f") {
    const v59 = ("bkq")[v58];
    v51.f = v59;
    v58--;
    v51[v58] = 12248;
    try { v59["o"]("o", "h", "o"); } catch (e) {}
}
("bkq")[F46];
const o64 = {
    "defineProperty": f3,
    "isExtensible": f3,
    "set": f3,
};
new Proxy(v40, o64);
function f67() {
    return v39;
}

const v0 = [2147483647,129,27570,4,313045770,-9007199254740991,-7027,48511,1615445062,9];
const v1 = [51345,-4096];
const v2 = [-16,9223372036854775807,1000,-2147483647,1024,-13319,4,-268435456,-9007199254740992,-1073741824];
const v3 = /foo(?<!bar)bazp\P{Any}*/usd;
const v4 = /a*?/vygi;
const v5 = /\P{scx=Greek}+/uygmsid;
function f6(a7, a8) {
    const o12 = {
        get c() {
            a7[-1] = v3;
            throw a7;
            const v10 = this >> a7;
            this[2];
            return v10;
        },
        "c": v4,
        "g": v3,
        __proto__: a8,
        "e": v3,
        "f": v0,
    };
    return o12;
}
const v13 = f6(v2, v2);
const v14 = f6(v1, v0);
const v15 = f6(v1, v5);
try { v2.findIndex(f6, v15); } catch (e) {}
const o20 = {
    [v14]: v2,
    ...v14,
    __proto__: v2,
    77: f6,
};
v0[v2];
let {"e":v22,...v23} = v13;
~f6;

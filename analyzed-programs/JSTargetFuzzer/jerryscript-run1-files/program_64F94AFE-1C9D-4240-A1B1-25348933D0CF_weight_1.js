function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    a5.h = a5;
    this.d = -1729538330;
    F3.c = a5;
}
const v6 = new F3(-1024);
const v7 = new F3(-1729538330);
const v8 = new F3(-1024);
const v9 = [v7,-1024,v8,-1024];
const v10 = [v9,v9,v6,v9];
const v11 = [v10,v10,v8];
function f12(a13, a14) {
    const o15 = {
        [-1729538330]: a14,
        __proto__: a14,
        "d": -1729538330,
        7: a14,
        ...v11,
        "h": 268435456,
        [F3]: a13,
        "a": v6,
        [v9]: 268435456,
        ...a14,
        "c": v11,
        [-1024]: v9,
    };
    return o15;
}
const v16 = f12(v10, v6);
f12(v16, v16);
f12(268435456, v16);
const v19 = [6,-7517,644864686,-9007199254740991,0,9007199254740991,-1,6138];
try { v19.reduceRight(v19, v19); } catch (e) {}

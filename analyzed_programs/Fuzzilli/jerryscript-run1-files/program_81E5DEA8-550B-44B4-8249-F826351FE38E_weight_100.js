const v3 = [-6];
const v4 = [-1];
const v5 = [9007199254740991,13575,-32398,-1607116517,-15,4096,-4294967296,-90915660,-1545997508,1073741824];
function f6(a7, a8, a9) {
    const o17 = {
        5: v5,
        o(a11, a12, a13) {
            a11 = v4;
            try { a12(); } catch (e) {}
            v4[Symbol.unscopables] = a11;
            return v4;
        },
        ...a7,
        "g": a8,
    };
    return o17;
}
f6(v3, -9007199254740992, 1);
f6(v5, -9007199254740992, -9007199254740992);
f6(v3, 1, -9007199254740992);
const v21 = [1,v3,-9007199254740992,v5,v3];
const v22 = [v3,f6,v21];
[f6];
class C24 {
    static #g = v21;
}
new C24();
new C24();
const v27 = new C24();
1 >>> v27;
typeof v22 === "undefined";

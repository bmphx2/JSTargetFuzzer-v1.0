function f0() {
}
const v2 = new WeakSet();
const v3 = [WeakSet,v2,WeakSet,v2,f0,f0];
const v4 = [v3];
const v5 = [v2,v2];
const v6 = [v3,v5,v2,v5,v2];
const v7 = [v4,v3,v6,v3];
const v8 = [v4,WeakSet,v7];
const v10 = [2,268435439,-2147483648,1897021969,-1024,65535,-526664038,6];
[-4294967296,10,-9,4294967296,-26711,257,-639029011,65535,435500310,708553752];
[57635,1073741825,32816,-4294967295];
const v14 = v4.constructor;
class C15 extends v14 {
    static 4 = f0;
    c = v14;
    d = v7;
}
new C15();
let {"f":v20,"length":v21,} = v6;
let v22;
try { v22 = new v20(); } catch (e) {}
(v6 < v5) ^ v22;
v4[v8];
const o30 = {
    get f() {
        return this;
    },
    __proto__: v4,
    "g": v10,
    "a": v21,
    [-2]: -65536,
    [v21]: v6,
    "f": 128,
    valueOf(a28, a29) {
        f0[3] = a28;
        this.valueOf = v22;
        return a28;
    },
};

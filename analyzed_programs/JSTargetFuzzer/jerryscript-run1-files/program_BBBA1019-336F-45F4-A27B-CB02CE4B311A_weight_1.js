function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 1;
}
const v3 = new F0(F0);
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a8;
}
const v9 = new F6(v5);
const v10 = new F6(v3);
const v11 = [];
let v12 = -10n;
v12--;
const v14 = v11[536870887];
const v15 = new F6(v3);
function f19(a20, a21, a22, a23) {
    const o24 = {
        ...v15,
        "a": v3,
        ...v10,
        "d": v10,
        __proto__: v10,
        "h": v15,
        "b": a22,
        ...v9,
        [v3]: 9007199254740991,
        "f": F0,
        [a22]: v5,
        [9007199254740991]: a20,
    };
    return o24;
}
const v25 = f19(512, v3, -1791387538, F0);
[-4096,1073741824,565299611,8,-2147483649,128,-61286,-128,3,-9007199254740992];
const v27 = [-56539,3,-1024,761030082,5,-128,13372];
const v28 = [-20811,-5435,4];
try { v4.defineProperty(512, -1791387538, v27, v3, v14, v28); } catch (e) {}
f19(F0, v25, 512, 512);
f19(512, v5, 9007199254740991, 512);
const v33 = [-8,4294967295,148900462];
Reflect.apply(SyntaxError().toString, v33);

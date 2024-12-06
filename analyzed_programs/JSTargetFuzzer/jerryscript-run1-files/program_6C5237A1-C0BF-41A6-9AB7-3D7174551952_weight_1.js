const v2 = -Infinity;
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a9;
}
const v11 = new F6(127, -536.1898188145344, v2);
const v12 = new F6(-9007199254740992, 2147483648, v2);
const v13 = new F6(v12, v12, v2);
const v14 = [v13,v11,v13,v12,v13];
const v15 = [2147483648,v12,v2,-9007199254740992];
const v16 = 2147483648 & v11;
try { v11.toString(v2, -536.1898188145344, v14, v16); } catch (e) {}
[-536.1898188145344,-9007199254740992,v15,v15,v2];
const v24 = new Uint8Array(1705);
const o30 = {
    m(a26, a27, a28) {
        v24.fill();
        return 1705;
    },
};
const v32 = o30.m;
class C34 {
    constructor(a36, a37, a38, a39) {
        const v43 = [a36,"6"];
        Reflect.apply(("g").padEnd, "g", v43);
    }
}
const v46 = new C34(7, 7, C34, C34);
function F47(a49, a50) {
    if (!new.target) { throw 'must be called with new'; }
    new a50(7);
}
new F47(v46, C34);
Reflect.apply(v32);

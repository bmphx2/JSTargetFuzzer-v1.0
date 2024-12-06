function f0() {
}
class C1 {
    static [f0] = f0;
    static 5;
    set h(a3) {
        const o4 = {
            "apply": f0,
            "call": f0,
            "defineProperty": f0,
            "deleteProperty": a3,
            "getOwnPropertyDescriptor": f0,
            "has": f0,
            "isExtensible": f0,
            "ownKeys": f0,
            "preventExtensions": f0,
            "set": f0,
            "setPrototypeOf": f0,
        };
        new Proxy(a3, o4);
    }
}
const v7 = new C1();
const v8 = new C1();
const v9 = new C1();
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a16;
    this.b = a15;
    this.c = v7;
}
const v17 = new F13(-50349, v8);
new F13(64, v9);
new F13(-50349, v7);
function f20() {
    return 64;
}
const v21 = [6,9,-1089835214,268435441,-25858,-454143031,-1];
const v22 = [4,1038512201,65537,4096,8,1073741823,-1073741824];
const o23 = {
};
o23[Symbol.unscopables];
const v27 = f20();
function f28() {
    return v27;
}
const v30 = Math.log10(Math);
v22[0] = v21;
C1.c;
delete v7[v17];
~(-3 + !-3);
o23[0] %= v30;

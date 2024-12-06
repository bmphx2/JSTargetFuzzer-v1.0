const v1 = new Date();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v1;
    this.d = Date;
    this.b = a4;
}
const v5 = new F2(F2);
const v6 = new F2(v5);
const v7 = new F2(F2);
const v11 = [5,-828972901];
const v12 = [-9223372036854775808,21615,268435439,129];
const v13 = [10,1024,2147483647,12407,-1024];
function F14(a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v12;
    this.a = v12;
    this.b = v11;
}
const v19 = new F14(v11, -1693, v11);
const v20 = new F14(v13, 65535, v13);
const v21 = new F14(v13, 65536, v12);
v11[65536] %= -1693;
function f22(a23, a24, a25, a26) {
    const o27 = {
        "b": v21,
        ...v19,
        __proto__: v20,
    };
    return o27;
}
const v28 = f22(v13, F2, v7, F14);
f22(v12, f22(v13, v13, v1, 65535), v6, v28);

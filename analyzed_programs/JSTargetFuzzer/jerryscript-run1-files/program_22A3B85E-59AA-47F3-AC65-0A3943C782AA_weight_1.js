function f0() {
}
const v1 = [745928368,10000,8,-552971837,-9007199254740991,3,-256,0];
const v2 = [-9007199254740992,-25972058,638852206,-41203,536870888,-893316882,1670830058,-45250,17164,7];
let v3 = [6787442,0,-4096,-2147483649,-2100091502,-65535,14,13];
function f4(a5) {
    const o6 = {
        __proto__: a5,
        "e": v2,
        [a5]: a5,
        2147483649: v2,
        ...a5,
        "f": a5,
        [v1]: f0,
        "h": a5,
        "a": v2,
        0: v1,
        ...a5,
        "c": f0,
    };
    return o6;
}
f4(v1);
const v8 = f4(v2);
const v9 = f4(v3);
class C10 extends f4 {
    get c() {
        super.e = this;
        v3 **= v3;
        let v13;
        try { v13 = this["o"](v8, "o", f0, v3); } catch (e) {}
        this.a &= v13;
        v2[this];
        return this;
    }
    #d;
    [f4] = v9;
    static 2 = v8;
}
new C10();
const v16 = new C10();
new C10();
C10 = v16;
for (let i19 = 0; i19 < 7; i19++) {
    v2.valueOf = f0;
}

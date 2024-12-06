const v3 = [9007199254740991];
const v4 = [4294967296,-9007199254740990,1073741824,65537];
const v5 = [512,9,536870912,-9007199254740992,-7];
function f6(a7, a8) {
    const o9 = {
        "c": a8,
        ...a8,
        "e": a8,
        __proto__: v3,
        "b": 536870888,
        2: 536870888,
        ...v4,
        1: a8,
        ...v4,
        "d": a7,
    };
    return o9;
}
f6(64, v4);
f6(6, v5);
const v12 = f6(64, v3);
let v15 = -1992735215;
function f16(a17, a18) {
    const o26 = {
        "d": a17,
        set b(a20) {
            let v21;
            try { v21 = a20(a20, this); } catch (e) {}
            v15 = a18;
            v21.valueOf = a20;
        },
        get c() {
            const v23 = [this];
            const v24 = [545904634,a17,v23,this,v23,v12,f16,v12];
            [v24,a17,v24,a18,545904634];
            return a18;
        },
    };
    return o26;
}
f16(638957980, v15);
f16(v15, 545904634);
const v29 = f16(v15, v15);
new Int32Array(249);
new Int32Array(2380);
const v38 = new Float32Array(3269);
v38[v38] = v38;
class C40 {
    [Int32Array] = 249;
    static [2380];
    a;
}
const v41 = new C40();
new C40();
new C40(249, v41, v29);

function f3(a4, a5) {
    const o9 = {
        get f() {
            this[Symbol.toStringTag] = this;
            return -2147483648;
        },
        __proto__: a4,
        "h": a4,
        "e": a4,
        "c": a4,
        ...a5,
        1408: a5,
        ...a5,
        "g": a4,
        3572210172: a4,
    };
    return o9;
}
f3(41549, -2147483648);
f3(-2147483648, 41549);
f3(-2147483648, -2147483648);
let v18 = -1992735215;
function f19(a20, a21) {
    const o29 = {
        "d": a20,
        set b(a23) {
            let v24;
            try { v24 = a23(a23, this); } catch (e) {}
            v18 = a21;
            v24.valueOf = a23;
        },
        get c() {
            const v26 = [this];
            const v27 = [545904634,a20,v26,this,v26];
            [v27,a20,v27];
            return a21;
        },
    };
    return o29;
}
f19(638957980, v18);
f19(v18, 545904634);
f19(v18, v18);
new Int32Array(249);
new Int32Array(2380);
const v41 = new Float32Array(3269);
v41[v41] = v41;
class C43 {
    [Int32Array] = 249;
    static [2380];
    a;
}
new C43();
new C43();
new C43();

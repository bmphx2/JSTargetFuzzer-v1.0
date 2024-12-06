class C3 {
    valueOf(a5, a6) {
        const v7 = [256,3,13427,6,-50592,2147483649,-7916,-64569,1000,9007199254740990];
        const v8 = [5,-268435456];
        const v9 = [-4294967297,-1361419891,-2,-3,-5,64106,12950,-5428,2147483648,-4294967295];
        super.b = v9;
        function F10(a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = v7;
            const t9 = "wfpt";
            t9.h = a13;
        }
        new F10(v9, v8, v8);
        const v16 = new F10(v9, v9, this);
        new F10(this, v9, v7);
        return v16;
    }
}
const v18 = new C3();
const v19 = new C3();
const v20 = new C3();
function f21(a22, a23, a24) {
    const o34 = {
        [a23](a26, a27, a28, a29) {
            a29.e = 4294967296n;
            try { a26.valueOf(); } catch (e) {}
            return a27;
        },
        __proto__: v19,
        128917767: v18,
        ...C3,
        [-1.7976931348623157e+308]: a23,
        "a": -5.0,
    };
    return o34;
}
const v35 = f21(v18, v19, v19);
f21(v20, v19, v20);
f21(v19, v35, v35);
async function f43(a44, a45) {
    async function f46(a47, a48) {
        await -1;
        return f46;
    }
    f46();
    await 512;
    return -1;
}
f43();

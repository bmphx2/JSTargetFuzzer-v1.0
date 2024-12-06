class C3 {
    o(a5, a6) {
        const v7 = [256,3,13427,6,-50592,2147483649,-7916,-64569,1000,9007199254740990];
        const v8 = [5,-268435456];
        const v9 = [-4294967297,-1361419891,-2,-3,-5,64106,12950,-5428,2147483648,-4294967295];
        super.b = v9;
        function F10(a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            this.f = v7;
            const t9 = "wfpt";
            t9.unscopables = a13;
        }
        function f15(a16, a17) {
            const o18 = {
                "h": a6,
            };
            return o18;
        }
        f15("wfpt", v9);
        f15(a6, v9);
        f15("wfpt", v9);
        new F10(v9, v8, v8, a5, C3, -1.7976931348623157e+308);
        const v23 = new F10(v9, v9, this);
        new F10(this, v9, v7);
        return v23;
    }
}
const v25 = new C3();
const v26 = new C3();
const v27 = new C3();
function f28(a29, a30, a31) {
    const o41 = {
        [a30](a33, a34, a35, a36) {
            a36.e = 4294967296n;
            try { a33.valueOf(); } catch (e) {}
            return a34;
        },
        __proto__: v26,
        128917767: v25,
        ...C3,
        [-1.7976931348623157e+308]: a30,
        "a": -5.0,
    };
    return o41;
}
const v42 = f28(v25, v26, v26);
f28(v27, v26, v27);
f28(v26, v42, v42);
async function f50(a51, a52) {
    async function f53(a54, a55) {
        await -1;
        return f53;
    }
    f53();
    await 512;
    return -1;
}
f50();

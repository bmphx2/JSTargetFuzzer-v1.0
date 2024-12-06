function f0() {
    const o11 = {
        ["I"](a5, a6) {
            try { a5(); } catch (e) {}
            this[0] = a6;
            return a5;
        },
        ["I"]: "I",
        ..."I",
    };
    return o11;
}
const v12 = f0();
const v13 = f0();
f0();
const v16 = new Date(Date, v13);
new Array();
async function f22(a23, a24) {
    function F25(a27, a28, a29) {
        if (!new.target) { throw 'must be called with new'; }
        F25();
    }
    class C31 extends F25 {
        constructor(a33) {
            for (let i36 = 0, i37 = 10;
                (() => {
                    const v38 = i36 < i37;
                    Float32Array > a33;
                    return v38;
                })();
                i36++) {
            }
            try { new F25(); } catch (e) {}
        }
        /*
        constructor(a48, a49, a50) {
            super();
        }
        */
    }
    new C31(C31, F25, a24);
    return C31;
}
f22(v16, v12);

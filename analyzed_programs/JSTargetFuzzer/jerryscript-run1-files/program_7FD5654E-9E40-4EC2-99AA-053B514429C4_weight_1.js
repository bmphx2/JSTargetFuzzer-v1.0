const v0 = [];
function f1() {
    const o6 = {
        get d() {
            e = this;
            const v3 = super.a;
            super.e = v3;
            try { v3(v0); } catch (e) {}
            function f5() {
                return v3;
            }
            return v3;
        },
        "c": v0,
        "b": v0,
        ...v0,
    };
    return o6;
}
const v7 = f1();
const v8 = f1();
const v9 = f1();
function f10() {
    return f1;
}
class C11 {
    static o(a13, a14, a15) {
        return delete v0[2460];
    }
    o(a18, a19, a20) {
        a18 ** this;
        const v22 = f1();
        Object.defineProperty(v8, "d", { writable: true, set: f10 });
        super.h = f1;
        const v23 = v8.c;
        function F24(a26, a27, a28) {
            if (!new.target) { throw 'must be called with new'; }
            this.d = f1;
            this.f = v9;
            v22[21] = v23;
            this.a = f10;
            for (let v29 = 0; v29 < 32; v29++) {
                v23["p" + v29] = v29;
            }
            this.c = a27;
        }
        new F24(a18, v23, a20);
        new F24(v23, v7, v7);
        new F24(a20, v8, v7);
        return f1;
    }
}
const v35 = new C11();
const v36 = new C11();
new C11();
function f38(a39, a40) {
    const o54 = {
        __proto__: v35,
        [v0]: v7,
        get a() {
            f1 ^ this;
            const v44 = Symbol.iterator;
            const o53 = {
                [v44]() {
                    let v46 = 10;
                    const o52 = {
                        next() {
                            v46--;
                            const v50 = v46 == 0;
                            const o51 = {
                                "done": v50,
                                "value": v46,
                            };
                            return o51;
                        },
                    };
                    return o52;
                },
            };
            return a40;
        },
    };
    return o54;
}
f38(v7, v36);
f38(v9, v36);
f38(v36, v36);
let v59 = 536870912;
let v60 = 1073741824;
class C61 {
    constructor(a63) {
        let v64 = 127 + v60;
        v59 *= v64;
        v64++;
        127 && 31657;
        Math.atanh(31657);
        Math.log10(31657);
        v60 ^ 127;
        --v60;
    }
}
const v73 = new C61(v60);
const v74 = new C61(v60);
new C61(v60);
v74.d = v73;
let v83 = 1470252707;
const v84 = v83++;
Math.log1p(v84);
65536 << v84;
for (let v87 = 0; v87 < 32; v87++) {
    C61["p" + v87] = v87;
}

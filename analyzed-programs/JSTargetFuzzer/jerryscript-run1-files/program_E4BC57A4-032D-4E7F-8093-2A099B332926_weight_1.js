function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -37847;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6() {
    return v5;
}
try {
    new F0();
    v5[3];
} catch(e13) {
}
function F19(a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a22;
    this.d = a21;
}
const v24 = new F19(-693612342, v3, "undefined");
const v25 = new F19(33531, f6, "gZkJ");
const v26 = new F19(33531, v25, "gZkJ");
class C27 {
    constructor(a29, a30) {
        function f31() {
            return "gZkJ";
        }
        const v33 = f31();
        function f34() {
            const o35 = {
                ...v33,
            };
            return C27;
        }
        f34();
        f34();
        v26[1985];
        const v40 = Symbol.iterator;
        const o49 = {
            [v40]() {
                let v42 = 10;
                const o48 = {
                    next() {
                        v42--;
                        const v46 = v42 == 0;
                        const o47 = {
                            "done": v46,
                            "value": v42,
                        };
                        return o47;
                    },
                };
                return o48;
            },
        };
    }
}
new C27(C27, C27);
v24[0] &= 33531;
v4 % v4;
const v55 = +4294967295;
Math.abs(-2147483649);
v55 || 4294967295;

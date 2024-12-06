let v1 = 1000000000.0;
class C3 {
    f = -602847.4433070768;
    static #toString(a5) {
        v1 = -602847.4433070768;
        const v7 = Symbol.toPrimitive;
        const o13 = {
            [v7]() {
                delete this?.c;
                let {"a":v10,"c":v11,"e":v12,} = this;
                v12 = Symbol;
                return a5;
            },
        };
        return o13;
    }
}
const v14 = new C3();
const v15 = new C3();
const v16 = new C3();
function f17(a18, a19, a20) {
    const o46 = {
        set c(a22) {
        },
        204: v1,
        9: -0.19443067566088423,
        set h(a27) {
            for (let i30 = 0, i31 = 10; i30 < i31; i30++, i31--) {
                function F39(a41, a42) {
                    if (!new.target) { throw 'must be called with new'; }
                    this.c = a19;
                }
                new F39(F39, -602847.4433070768);
                new F39(a27, -0.19443067566088423);
                new F39(C3, -602847.4433070768);
            }
        },
    };
    return o46;
}
const v47 = f17(v14, v15, v16);
const v48 = f17(v16, v16, v16);
const v49 = f17(v15, v15, v15);
function F50(a52, a53, a54, a55) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v1;
    this.a = v48;
    this.d = v48;
}
new F50(-0.19443067566088423, v48, v47, v14);
new F50(-602847.4433070768, v49, C3, v14);
const v58 = new F50(-602847.4433070768, v48, v47, v14);
v49[v58] **= -602847.4433070768;
const v62 = new C3();
let v64 = -220704651;
v62.f = -0.19443067566088423;
({"f":F50,...v64} = C3);

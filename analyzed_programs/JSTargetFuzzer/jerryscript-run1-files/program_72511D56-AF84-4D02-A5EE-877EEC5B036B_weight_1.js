function f0() {
}
function f1() {
    const o6 = {
        m() {
            return f0;
        },
        "c": f0,
        9: f0,
        [f0]: f0,
        __proto__: f0,
        "f": f0,
    };
    return o6;
}
const v7 = f1();
const v8 = f1();
const v9 = f1();
class C10 extends f1 {
    constructor(a12, a13) {
        super();
        super.c = v7;
        a12 = f0;
        a12();
        class C15 {
            static 8 = v8;
        }
        new C15();
        new C15();
        new C15();
    }
    set g(a20) {
    }
}
new C10(C10, v9);
new C10(v9, v7);
new C10(f0, v7);
async function* f33(a34, a35) {
    return f33;
}
const v36 = f33();
let v39;
try {
const t0 = 1728247543;
v39 = t0(-1, v36, 1728247543);
} catch (e) {}
try { v39.o(-1, v36, v39); } catch (e) {}
const v41 = new Uint32Array(181);
let v43 = BigUint64Array;
let v44 = new v43(1);
let v45 = 253;
[v45,,v43,v44] = v41;
try { v43["abs"](181, v45, v43); } catch (e) {}
new Uint16Array(v45);
for (let i58 = 0;
    (() => {
        class C59 {
        }
        class C60 extends C59 {
        }
        try {
        } catch(e61) {
        } finally {
        }
        return i58 < 2;
    })();
    i58++) {
    const v67 = new Function("x");
    v67.name;
}
Function();

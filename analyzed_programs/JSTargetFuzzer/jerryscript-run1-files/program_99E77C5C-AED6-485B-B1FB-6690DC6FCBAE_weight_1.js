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
f1();
const v9 = f1();
class C10 extends f1 {
    constructor(a12, a13) {
        super();
        super.c = v7;
        a12 = f0;
        a12();
    }
    set g(a16) {
    }
}
new C10(C10, v9);
new C10(v9, v7);
new C10(f0, v7);
async function* f29(a30, a31) {
    return f29;
}
const v32 = f29();
let v35;
try {
const t0 = 1728247543;
v35 = t0(-1, v32, 1728247543);
} catch (e) {}
try { v35.o(-1, v32, v35); } catch (e) {}
const v37 = new Uint32Array(181);
let v39 = BigUint64Array;
let v40 = new v39(1);
let v41 = 253;
[v41,,v39,v40] = v37;
try { v39["abs"](181, v41, v39); } catch (e) {}
new Uint16Array(v41);
for (let i54 = 0;
    (() => {
        class C55 {
        }
        class C56 extends C55 {
        }
        try {
        } catch(e57) {
        } finally {
        }
        return i54 < 2;
    })();
    i54++) {
    const v63 = new Function("x");
    v63.name;
}
Function();

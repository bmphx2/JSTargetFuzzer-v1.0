function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this.c = 1024;
    this.g = 1024;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v5,v5];
const v7 = [v6,v3,v6,v6,v5];
const v8 = [F0,F0,v7];
function f9(a10, a11, a12) {
    const o16 = {
        __proto__: v6,
        [v5]: v6,
        get b() {
            a11.b;
            try { a12(this, v3, v4); } catch (e) {}
            a11 >>= v6;
            return F0;
        },
        "e": f9,
        "g": a10,
        [v8]: F0,
        [-1]: v8,
        6: a10,
        "b": a12,
    };
    return o16;
}
f9(v8, v7, v4);
let v18 = f9(v7, v6, v6);
f9(v8, v6, f9);
class C20 {
    constructor(a22, a23) {
        v18 = this;
        const v25 = Symbol.iterator;
        const o34 = {
            [v25]() {
                let v27 = 10;
                const o33 = {
                    next() {
                        v27--;
                        const v31 = v27 == 0;
                        const o32 = {
                            "done": v31,
                            "value": v27,
                        };
                        return o32;
                    },
                };
                return o33;
            },
        };
    }
}
const v35 = new C20(v18, v18);
new C20(F0, v35);
new C20(v7, v35);
const v41 = [65535n,0n,964329252n];
let v42 = [964329252n,964329252n,v41,v41];
const v43 = [v42,v42,v41,964329252n,0n];
const v44 = [65535n,v42];
[v43,0n];
const v46 = [v42];
const t66 = "fdNr";
t66[0] = 65535n;
let v53;
try {
const t0 = "localeCompare";
v53 = new t0(v41, v46, v46, 58270);
} catch (e) {}
async function* f54(a55, a56, a57) {
    ({"length":a55,...v42} = a56);
    yield v41;
    await a55;
    yield "fdNr";
    return a55;
}
f54(58270, v44, v53);

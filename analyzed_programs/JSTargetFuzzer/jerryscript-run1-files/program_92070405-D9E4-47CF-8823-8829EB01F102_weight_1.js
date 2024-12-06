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
        [v3]: a10,
        268435441: a11,
        ...v6,
        "f": v5,
        "d": v5,
        "g": a10,
        6: v3,
        "b": F0,
        1571106043: a10,
        ...v6,
        ...v5,
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
        for (let i26 = 0; i26 < 6; i26++) {
            Object.defineProperty(v3, "c", { configurable: true, get: Symbol, set: Symbol });
        }
        const v32 = Symbol.iterator;
        const o41 = {
            [v32]() {
                let v34 = 10;
                const o40 = {
                    next() {
                        v34--;
                        const v38 = v34 == 0;
                        const o39 = {
                            "done": v38,
                            "value": v34,
                        };
                        return o39;
                    },
                };
                return o40;
            },
        };
    }
}
const v42 = new C20(v18, v18);
new C20(F0, v42);
new C20(v7, v42);
const v48 = [65535n,0n,964329252n];
let v49 = [964329252n,964329252n,v48,v48];
const v50 = [v49,v49,v48,964329252n,0n];
const v51 = [65535n,v49];
[v50,0n];
const v53 = [v49];
const t79 = "fdNr";
t79[0] = 65535n;
let v60;
try {
const t0 = "localeCompare";
v60 = new t0(v48, v53, v53, 58270);
} catch (e) {}
async function* f61(a62, a63, a64) {
    ({"length":a62,...v49} = a63);
    yield v48;
    await a62;
    yield "fdNr";
    return a62;
}
f61(58270, v51, v60);

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
        6: a12,
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
const t43 = f9(v8, v6, f9);
const v20 = delete t43[1073741825];
[v20,v20,v7];
[v3,v5,F0];
[v7];
const v24 = v4[16];
class C25 {
    constructor(a27, a28) {
        v18 = this;
        for (let i31 = 0;
            (() => {
                for (let i34 = 0; i34 < 9; i34++) {
                    const v40 = v18.e;
                    try { a28(v24, v40, v40); } catch (e) {}
                }
                return i31 < 6;
            })();
            i31++) {
            Object.defineProperty(v3, "c", { configurable: true, get: Symbol, set: Symbol });
        }
        const v46 = Symbol.iterator;
        const o55 = {
            [v46]() {
                let v48 = 10;
                const o54 = {
                    next() {
                        v48--;
                        const v52 = v48 == 0;
                        const o53 = {
                            "done": v52,
                            "value": v48,
                        };
                        return o53;
                    },
                };
                return o54;
            },
        };
    }
}
const v56 = new C25(v18, v18);
new C25(F0, v56);
new C25(v7, v56);
const v62 = [65535n,0n,964329252n];
let v63 = [964329252n,964329252n,v62,v62];
const v64 = [v63,v63,v62,964329252n,0n];
const v65 = [65535n,v63];
[v64,0n];
v18.toString = f9;
const v73 = [v63];
const t93 = "fdNr";
t93[0] = 65535n;
let v80;
try {
const t0 = "localeCompare";
v80 = new t0(f9, v73, v73, 58270);
} catch (e) {}
async function* f81(a82, a83, a84) {
    ({"length":a82,...v63} = a83);
    yield v62;
    await a82;
    yield "fdNr";
    return a82;
}
f81(58270, v65, v80);

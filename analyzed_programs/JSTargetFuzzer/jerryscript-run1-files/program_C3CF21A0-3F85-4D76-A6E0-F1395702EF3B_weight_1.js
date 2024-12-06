function f0() {
}
const v1 = [-15,-9,3,-2147483648];
const v2 = [-5,33330,64];
const v3 = [-256,512,-13];
class C4 {
    static get c() {
        const o6 = {
            "call": f0,
            "toStringTag": f0,
            "global": f0,
            "isExtensible": f0,
            "preventExtensions": f0,
            "setPrototypeOf": f0,
        };
        const v8 = new Proxy(v2, o6);
        return v8;
    }
}
const v9 = new C4();
const v10 = new C4();
const v11 = new C4();
[v11,v9,f0,v11,v3];
-2 >>> -2;
const o16 = {
    valueOf() {
        super.f = this;
        return this;
    },
};
[v2];
const v18 = [v11];
function F19(a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v2;
}
const v23 = new F19(v11, v18);
const v24 = new F19(v18, v23);
new F19(v1, v24);
const v29 = [268435456n,0n,964329252n,v10,v3];
let v30 = [964329252n,964329252n,v29,v29];
const v31 = [v30,v30,v29,964329252n,0n];
const v32 = [268435456n,v30];
[v31,0n];
const v34 = [v30];
const t45 = "fdNr";
t45[0] = 268435456n;
let v41;
try {
const t0 = "localeCompare";
v41 = new t0(v29, v34, v34, 4);
} catch (e) {}
async function* f42(a43, a44, a45) {
    ({"length":a43,...v30} = a44);
    yield v29;
    await a43;
    yield "fdNr";
    return a43;
}
f42(4, v32, v41);

function f0() {
    const o19 = {
        "f": 16,
        __proto__: "function",
        set g(a5) {
            function f6(a7, a8) {
                a7[a8] = this;
                let v9;
                try { v9 = new a8(a8); } catch (e) {}
                try { v9(this, a7, this, "function"); } catch (e) {}
                return Infinity;
            }
            f6("function", f6);
            const v13 = [a5,16];
            const v14 = ("function").slice;
            Reflect.apply(v14, "function", v13);
            for (let v16 = 0; v16 < 32; v16++) {
                v14["p" + v16] = v16;
            }
        },
        "a": "function",
    };
    return o19;
}
f0();
const v21 = f0();
const v22 = f0();
function F23(a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v21;
}
const v26 = new F23(v21);
new F23(v21);
const v28 = new F23(v22);
class C29 {
    p(a31, a32, a33, a34) {
        try { this.o(v26); } catch (e) {}
        return v28;
    }
    static get a() {
        try {
            f0();
        } finally {
            new Float32Array(240);
            new Uint16Array(104);
            new Uint16Array(6);
        }
        return v22;
    }
}
new C29();
new C29();
new C29();
let v55 = -58444;
new Uint8Array(127);
new BigUint64Array(3485);
new Uint8Array(1743);
v55 = 3485;
function f65() {
    !arguments;
    [-9007199254740992,2147483647,-4,4294967297,-3,-28259,-9007199254740992,-665863452,1258727004,54404];
    [-325032606,1073741824,-18674,19598,-1896359703,256,1073741824,13,7,-1744872978];
    [58091,2147483648,-4096,5];
    return arguments;
}
f65(f65);

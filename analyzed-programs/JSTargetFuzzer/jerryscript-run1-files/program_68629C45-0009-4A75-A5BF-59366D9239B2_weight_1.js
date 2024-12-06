function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f0;
    this.f = f0;
    this.a = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function f9(a10, a11, a12, a13) {
    const o24 = {
        "e": a13,
        "b": f0,
        "h": a11,
        65536: a12,
        "d": f0,
        "a": v5,
        ...v4,
        __proto__: v5,
        set c(a15) {
            Object.defineProperty(a13, "g", { enumerable: true, value: v5 });
            let v18 = v4 | a11;
            a11--;
            v18++;
            Math.fround(v4);
            Math.clz32(-22508);
            Math.sign(-22508);
        },
    };
    return o24;
}
f9(298296598, -10, 298296598, v5);
f9(29217, 29217, -10, v5);
f9(29217, -10, 298296598, v3);
[-1000000000000.0,110004.91880782717,-489.4048718761601];
[-1.5853574924883539e+308,3.0,4.0];
[-1000000000000.0,-5.0,-1.2850366417854696e+308,-756797.0857105228,-1.0281055845276004e+308,1000000000.0,1000000000.0,4.806681652972713];
let v33 = -1992735215;
function f34(a35, a36) {
    const o44 = {
        "d": a35,
        set b(a38) {
            let v39;
            try { v39 = a38(a38, this); } catch (e) {}
            v33 = a36;
            v39.valueOf = a38;
        },
        get c() {
            const v41 = [this];
            const v42 = [545904634,a35,v41,this,v41];
            [v42,a35,v42];
            return a36;
        },
    };
    return o44;
}
f34(v33, v33);
f34(v33, 545904634);
f34(v33, v33);
new Int32Array(249);
new Int32Array(2380);
const v56 = new Float32Array(3269);
v56[v56] = v56;
class C58 {
    [Int32Array] = 249;
    static [2380];
    a;
}
new C58();
new C58();
new C58();

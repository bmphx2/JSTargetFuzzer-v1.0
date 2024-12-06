const v0 = [-9,2];
const v1 = [268435456];
const v2 = [-717268943,256,-6726,536870888,2,-14,-868083630,-4294967297];
function f3(a4, a5) {
    const o19 = {
        [a5](a7) {
            return this;
        },
        ...a5,
        [a5]: v0,
        get b() {
            [v2,a5,this];
            [v0,a4];
            const v14 = [a5];
            const o15 = {
            };
            new Proxy(v14, o15);
            this[43];
            return v0;
        },
    };
    return o19;
}
const v20 = f3(v1, v1);
const v21 = f3(v0, v0);
const v22 = f3(v0, v1);
function f23(a24, a25) {
    const o28 = {
        [a24]: v2,
        "b": a24,
        "e": v22,
        __proto__: v22,
        set f(a27) {
            v1[0] = this;
            super.d = this;
        },
        [a25]: v22,
        ...v21,
        "c": v20,
        [v1]: a24,
        [v0]: v1,
        "h": v21,
        "f": v1,
    };
    return o28;
}
f23(v21, v2);
f23(f3(v2, v1), v2);
new Uint16Array(3);
new BigUint64Array(3911);
new Float64Array(3911);
const v43 = [6.587821035819711e+307,4294967297n];
try { v43.toLocaleString(v43, v43); } catch (e) {}

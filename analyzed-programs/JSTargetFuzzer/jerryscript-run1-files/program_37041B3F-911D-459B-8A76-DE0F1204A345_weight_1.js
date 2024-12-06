class C3 {
    static valueOf(a5) {
        function f6(a7, a8) {
            const o9 = {
                __proto__: a7,
                "b": 196666.63374249125,
                "g": a7,
            };
            return o9;
        }
        f6(6, 196666.63374249125);
        const v11 = f6(196666.63374249125, a5);
        f6(v11, v11);
        return a5;
    }
}
const v13 = new C3();
const v14 = new C3();
const v15 = new C3();
const v19 = [41520,658915409,-128,1073741823];
const v20 = [-421.64567039388294,-1e-15,NaN,0.0,1.07640193722729e+308,975.4811346135555];
function f21(a22, a23) {
    const o24 = {
    };
    return o24;
}
const v25 = f21(f21, f21);
const o26 = {
    "get": f21,
    "set": f21,
};
const v28 = new Proxy(v25, o26);
v28.g >>= v20;
const v29 = [-16406,5,-5123,9007199254740991,7,-54625,-42508,1716867122];
[257];
function F31(a33, a34) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a33;
    this.b = a34;
}
new F31(v13, v13);
new F31(v19, v15);
new F31(v14, v29);
const v40 = new Float32Array(10657);
const v43 = new BigInt64Array(702);
try { v40.set(v43); } catch (e) {}

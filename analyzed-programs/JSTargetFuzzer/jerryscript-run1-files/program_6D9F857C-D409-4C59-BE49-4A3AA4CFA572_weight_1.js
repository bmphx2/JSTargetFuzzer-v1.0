let v0 = [1000000.0,NaN,0.539902349621364,Infinity,NaN,-Infinity,-1.643587429961432,2.2250738585072014e-308];
const v1 = [-5.0,-444884.27681454667];
let v2 = [252.52361118335125];
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a9;
}
const v11 = new F6(v2, 9007199254740990n, -11441n);
const v12 = new F6(v2, -11441n, 9007199254740990n);
let v13 = new F6(v0, -11441n, -11441n);
function f14(a15, a16, a17) {
    const o31 = {
        get f() {
            return super.b;
        },
        "c": a17,
        ...a15,
        [v2]: v1,
        "f": v2,
        [a15](a21, a22, a23) {
            const v26 = a15[Symbol.search];
            v12[v26];
            try {
                super.random(this);
            } catch(e29) {
            }
            try { v26(); } catch (e) {}
            return this;
        },
    };
    return o31;
}
const v32 = f14(v1, v0, v1);
const v33 = f14(v0, v0, v0);
let v34 = f14(v2, v2, v1);
let v35 = undefined;
const o47 = {
    get c() {
        let v36 = this;
        for (const v38 of v35 = arguments) {
            let v40 = 20738;
            v36 >> arguments;
            ++v40;
            arguments << arguments;
            Math.asinh(arguments);
            --v36;
            --v2;
        }
        return v36;
    },
};
const v49 = v33 | v33[8];
v33[3] = 9007199254740990n;
({"c":v34,"g":v0,...v13} = v32);
try { v34.values(v12, v11, v34, v49); } catch (e) {}
const o51 = {
    ...v32,
};
Math.asinh(v35) ^ v35;

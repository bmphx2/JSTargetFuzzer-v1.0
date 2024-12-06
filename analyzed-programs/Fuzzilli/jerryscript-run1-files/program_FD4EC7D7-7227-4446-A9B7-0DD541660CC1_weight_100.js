const v3 = [-2.0,-2.0,0.11563949235295967,-2.0,0.4406382371998814];
const v4 = [v3,0.11563949235295967];
const v5 = [-2.0,v4,0.4406382371998814,0.11563949235295967];
function f6(a7, a8) {
    const o27 = {
        "h": 0.11563949235295967,
        "e": a7,
        p(a10, a11, a12) {
            const v13 = typeof v4;
            v13 === "number";
            const v17 = Symbol.iterator;
            const o26 = {
                [v17]() {
                    let v19 = 10;
                    const o25 = {
                        next() {
                            v19--;
                            const v23 = v19 == 0;
                            const o24 = {
                                "done": v23,
                                "value": v19,
                            };
                            return o24;
                        },
                    };
                    return o25;
                },
            };
            return v13;
        },
    };
    return o27;
}
f6(v3, -2.0);
const v29 = f6(v5, 0.4406382371998814);
const v30 = f6(v5, 0.4406382371998814);
[[v5,f6]];
const v33 = [v30,v4];
class C34 {
    static {
        this.h = this;
        let v36;
        try { v36 = this.unregister(this, v33, v5); } catch (e) {}
        v29[2147483648] = this;
        Math.log1p(1007843330);
        Math.tanh(v36);
        const v42 = 1407761858 + v36;
        Math.log10(v42);
        Math.expm1(v42);
    }
    #d;
}
new C34();
const v46 = new C34();
const v47 = new C34();
new C34();
const v49 = f6(v33, 0.4406382371998814);
[9,-9007199254740991,-10,14,1073741823,2,34820,-985220054];
[-1,-9,10,-1423046220,-1073741824,-2147483649,7318,-2147483648,65535,-1143829994];
[-422789015,1939701685,-2147483649,-13,268435441,1433706797];
const o53 = {
    __proto__: v47,
    ...C34,
    "c": v46,
    [v5]: v49,
};

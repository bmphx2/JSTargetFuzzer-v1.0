let v1 = -65537;
let v3 = -2.0804121284193993e+307;
function f6(a7, a8, a9) {
    const o25 = {
        ...a8,
        o(a11, a12, a13, a14) {
            super.e = 1.7976931348623157e+308;
            delete a9?.[a12];
            function F16(a18, a19, a20, a21) {
                if (!new.target) { throw 'must be called with new'; }
                this.a = a18;
                this.g = 1000;
            }
            new F16(a8, F16, a9, this);
            const v23 = new F16(a7, v1, a14, a12);
            new F16(a14, v23, v1, v23);
            return a9;
        },
    };
    return o25;
}
const v26 = f6(1000, v3, v3);
f6(1000, v3, v26);
f6(1000, v1, v26);
({"g":v1,"h":v3,} = v26);
v3 = 1.7976931348623157e+308;
typeof v3 === "string";

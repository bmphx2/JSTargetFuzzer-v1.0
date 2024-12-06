new WeakSet();
function F13() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -7;
    this.a = -7;
    this.f = -7;
}
const v16 = new F13();
const v17 = new F13();
const v18 = new F13(v17, true);
function f19() {
    return v16;
}
function f20(a21) {
    const o36 = {
        [a21]: v17,
        m(a23, a24, a25, a26) {
            if (a24) {
                const v30 = -a24;
                v30 & 4001;
                4001 ^ v30;
            } else {
                for (let v33 = 0; v33 < 32; v33++) {
                    a25["p" + v33] = v33;
                }
            }
            return a23;
        },
    };
    return o36;
}
const v37 = f20(v18);
f20(v18);
f20(v37);
const v40 = [-1000000.0,1000.0,-5.540100498195459,-5.0,2.220446049250313e-16,1000000000000.0];
[-2.2250738585072014e-308,1e-15,-588445.7026351644,3.37054032186377e+307,1.531601836189127,1000000000.0,2.0,-2.4796273445888502e+306,-0.0,-1.0];
const v42 = [-406337.60012464086,796675.3733859584,-532.661056875515];
for (let v46 = 0; v46 < 32; v46++) {
    v40["number" + v46] = v46;
}
v40[9223372036854775807];
let {"a":v51,"length":v52,} = v42;
[f19,v18,v52,v51];
[v40];
[v40,v40];

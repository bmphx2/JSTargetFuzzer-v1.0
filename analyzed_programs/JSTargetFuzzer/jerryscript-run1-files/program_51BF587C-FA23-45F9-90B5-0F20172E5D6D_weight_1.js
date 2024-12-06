function f6() {
    return 14;
}
function f7() {
    return -65535;
}
function F11() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -7;
    this.a = -7;
    this.f = -7;
}
const v14 = new F11();
const v15 = new F11();
const v16 = new F11();
function f17() {
    return v14;
}
function f18(a19) {
    const o34 = {
        [a19]: v15,
        m(a21, a22, a23, a24) {
            if (a22) {
                const v28 = -a22;
                v28 & 4001;
                4001 ^ v28;
            } else {
                for (let v31 = 0; v31 < 32; v31++) {
                    a23["p" + v31] = v31;
                }
            }
            return a21;
        },
    };
    return o34;
}
const v35 = f18(v16);
f18(v16, v35, v35);
f18(v35);
const v38 = [-1000000.0,1000.0,-5.540100498195459,-5.0,2.220446049250313e-16,1000000000000.0];
[-310787.1174436803];
const v40 = [-7.92607580612048e+306,-Infinity,9.046904697781734,1000000.0,NaN,59496.24991420959,-0.3385919249534126,1.0];
for (let v44 = 0; v44 < 32; v44++) {
    v38["p" + v44] = v44;
}
v38[9223372036854775807];
let {"a":v49,"length":v50,} = v40;
[f17,v16,v50,v49];
[v38];
[v38,v38];

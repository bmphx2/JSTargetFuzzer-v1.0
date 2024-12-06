new Uint32Array(9);
new Uint8ClampedArray(512);
new Uint32Array(2225);
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -7;
    this.a = -7;
    this.f = -7;
}
const v18 = new F15();
const v19 = new F15();
const v20 = new F15();
function f21() {
    return v18;
}
function f22(a23) {
    const o38 = {
        [a23]: v19,
        m(a25, a26, a27, a28) {
            if (a26) {
                const v32 = -a26;
                v32 & 4001;
                4001 ^ v32;
            } else {
                for (let v35 = 0; v35 < 32; v35++) {
                    a27["p" + v35] = v35;
                }
            }
            return a25;
        },
    };
    return o38;
}
const v39 = f22(v20);
f22(v20);
f22(v39);
const v42 = [-1000000.0,1000.0,-5.540100498195459,-5.0,2.220446049250313e-16,1000000000000.0];
[0.5933077301169822,4.53564238653173,0.09718127795638731,2.220446049250313e-16,1000000000.0,0.12946129135091933];
const v44 = [-7.92607580612048e+306,-Infinity,9.046904697781734,1000000.0,NaN,59496.24991420959,-0.3385919249534126,1.0];
for (let v48 = 0; v48 < 32; v48++) {
    v42["p" + v48] = v48;
}
v42[9223372036854775807];
let {"a":v53,"length":v54,} = v44;
[f21,v20,v54,v53];
[v42];
[v42,v42];

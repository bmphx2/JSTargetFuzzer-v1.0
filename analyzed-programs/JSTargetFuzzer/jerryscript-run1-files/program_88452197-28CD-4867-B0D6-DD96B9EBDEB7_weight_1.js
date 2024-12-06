function f3() {
    return 7;
}
new Uint32Array(14);
new Int32Array(128);
const v12 = new Uint8ClampedArray(4096);
function F13() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -7;
    this.a = -7;
    this.f = -7;
}
const v16 = new F13();
const v17 = new F13();
const v18 = new F13();
function f19() {
    return v16;
}
function f20(a21) {
    const o36 = {
        [a21]: v17,
        m(a23, a24, a25, a26) {
            if (a24) {
                const v30 = a24++;
                v30 & 14;
                4001 ^ v30;
            } else {
                for (let v33 = 0; v33 < 32; v33++) {
                    a25["p" + 128] = v33;
                }
            }
            return a23;
        },
    };
    return a21;
}
const v37 = f20(v18);
f20(v18);
f20(v37);
const v40 = [-1000000.0,1000.0,-5.540100498195459,-5.0,2.220446049250313e-16,1000000000000.0];
const v41 = [0.5933077301169822,4.53564238653173,0.09718127795638731,2.220446049250313e-16,1000000000.0,0.12946129135091933];
const v42 = [-7.92607580612048e+306,-Infinity,9.046904697781734,1000000.0,NaN,59496.24991420959,-0.3385919249534126,1.0];
for (let v46 = 0; v46 < 32; v46++) {
    v40["p" + v46] = v46;
}
v40[4096];
let {"a":v51,"length":v52,} = v42;
[v40,[F13,v17,v52,v51],f3,v12];
[v41,v40];

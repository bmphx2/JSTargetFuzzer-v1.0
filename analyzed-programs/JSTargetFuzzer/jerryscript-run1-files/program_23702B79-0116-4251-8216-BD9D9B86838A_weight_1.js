new Int32Array(3);
new Int32Array(16);
new Uint8Array(2);
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -7;
    this.a = -7;
    this.f = -7;
}
const v15 = new F12();
const v16 = new F12();
const v17 = new F12();
function f18() {
    return v15;
}
function f19(a20) {
    const o35 = {
        [a20]: v16,
        m(a22, a23, a24, a25) {
            if (a23) {
                const v29 = -a23;
                v29 & 4001;
                4001 ^ v29;
            } else {
                for (let v32 = 0; v32 < 32; v32++) {
                    a24["p" + v32] = v32;
                }
            }
            return a22;
        },
    };
    return o35;
}
const v36 = f19(v17);
f19(v17);
f19(v36);
const v39 = [-1000000.0,1000.0,-5.540100498195459,-5.0,2.220446049250313e-16,1000000000000.0];
[0.5933077301169822,4.53564238653173,0.09718127795638731,2.220446049250313e-16,1000000000.0,0.12946129135091933];
const v41 = [-7.92607580612048e+306,-Infinity,9.046904697781734,1000000.0,NaN,59496.24991420959,-0.3385919249534126,1.0];
let v43 = 0;
while (v43 < 4) {
    for (let v46 = 0; v46 < 32; v46++) {
        v15["p" + v46] = v46;
    }
    v43++;
}
for (let v52 = 0; v52 < 32; v52++) {
    v39["p" + v52] = v52;
}
v39[9223372036854775807];
let {"a":v57,"length":v58,} = v41;
[f18,v17,v58,v57];
[v39];
[v39,v39];

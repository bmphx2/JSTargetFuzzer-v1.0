new Float64Array(1920, Float64Array);
new Uint8Array(65537);
new Uint8Array(127);
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -7;
    this.a = -7;
    this.f = -7;
}
const v15 = new F12();
const v16 = new F12();
const v17 = new F12();
const v20 = new Float32Array(10657);
const v23 = new BigInt64Array(702);
try { v20.set(v23); } catch (e) {}
function f25() {
    return v15;
}
function f26(a27) {
    const o42 = {
        [a27]: v16,
        m(a29, a30, a31, a32) {
            if (a30) {
                const v36 = -a30;
                v36 & 4001;
                4001 ^ v36;
            } else {
                for (let v39 = 0; v39 < 32; v39++) {
                    a31["p" + v39] = v39;
                }
            }
            return a29;
        },
    };
    return o42;
}
const v43 = f26(v17);
f26(v17, -36762);
f26(v43);
const v46 = [-1000000.0,1000.0,-5.540100498195459,-5.0,2.220446049250313e-16,1000000000000.0];
[0.5933077301169822,4.53564238653173,0.09718127795638731,2.220446049250313e-16,1000000000.0,0.12946129135091933];
const v48 = [-7.92607580612048e+306,-Infinity,9.046904697781734,1000000.0,NaN,59496.24991420959,-0.3385919249534126,1.0];
for (let v52 = 0; v52 < 32; v52++) {
    v46["p" + v52] = v52;
}
v46[9223372036854775807];
let {"a":v57,"length":v58,} = v48;
[f25,v17,v58,v57];
[v46];
[v46,v46];

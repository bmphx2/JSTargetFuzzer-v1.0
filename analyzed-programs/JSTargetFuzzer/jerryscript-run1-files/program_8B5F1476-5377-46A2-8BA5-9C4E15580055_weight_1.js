function f6() {
    return 17594;
}
new Float64Array(255);
new Uint32Array(2250);
new Uint8ClampedArray(215);
function F16() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -7;
    this.a = -7;
    this.f = -7;
}
const v19 = new F16();
const v20 = new F16();
const v21 = new F16();
function f22() {
    return v19;
}
let v26 = typeof f22() === "object";
({"h":v26,} = v21);
function f27(a28) {
    const o43 = {
        [a28]: v20,
        m(a30, a31, a32, a33) {
            if (a31) {
                const v37 = -a31;
                v37 & 4001;
                4001 ^ v37;
            } else {
                for (let v40 = 0; v40 < 32; v40++) {
                    a32["p" + v40] = v40;
                }
            }
            return a30;
        },
    };
    return o43;
}
const v44 = f27(v21);
f27(v21);
f27(v44);
const v47 = [-1000000.0,1000.0,-5.540100498195459,-5.0,2.220446049250313e-16,1000000000000.0];
[0.5933077301169822,4.53564238653173,0.09718127795638731,2.220446049250313e-16,1000000000.0,0.12946129135091933];
const v49 = [-7.92607580612048e+306,-Infinity,9.046904697781734,1000000.0,NaN,59496.24991420959,-0.3385919249534126,1.0];
for (let v53 = 0; v53 < 32; v53++) {
    v47["p" + v53] = v53;
}
v47[9223372036854775807];
let {"a":v58,"length":v59,} = v49;
[f22,v21,v59,v58];
[v47];
[v47,v47];

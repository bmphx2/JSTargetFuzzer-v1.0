const v1 = new WeakMap();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a4;
    this.d = WeakMap;
    this.e = v1;
}
const v5 = new F2(v1);
new F2(v5);
const v7 = new F2(WeakMap);
function F14() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -7;
    this.a = -7;
    this.f = -7;
}
const v17 = new F14();
const v18 = new F14();
const v19 = new F14();
function f20() {
    return v17;
}
function f21(a22) {
    const o37 = {
        [a22]: v18,
        m(a24, a25, a26, a27) {
            if (a25) {
                const v31 = -a25;
                v31 & 4001;
                4001 ^ v31;
            } else {
                for (let v34 = 0; v34 < 32; v34++) {
                    a26["p" + v34] = v34;
                }
            }
            return a24;
        },
    };
    return o37;
}
const v38 = f21(v19);
f21(v19);
f21(v38);
const v41 = [-1000000.0,1000.0,-5.540100498195459,-5.0,2.220446049250313e-16,1000000000000.0];
[0.5933077301169822,4.53564238653173,0.09718127795638731,2.220446049250313e-16,1000000000.0,0.12946129135091933];
const v43 = [-7.92607580612048e+306,-Infinity,9.046904697781734,1000000.0,NaN,59496.24991420959,-0.3385919249534126,1.0];
for (let v47 = 0; v47 < 32; v47++) {
    v41["p" + v47] = v47;
}
v41[9223372036854775807];
let {"a":v52,"length":v53,} = v43;
[f20,v19,v53,v52];
[v7];
[v41,v41];

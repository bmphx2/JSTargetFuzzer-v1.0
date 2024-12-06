new Uint8ClampedArray(5);
new Uint16Array(2975);
new BigInt64Array(1533);
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a15;
    this.b = a15;
    this.f = a14;
}
new F12(43107044, 7, 1533);
const v18 = new F12(2975, 5, 5);
new F12(2975, 1533, 43107044);
function F20() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -7;
    this.a = -7;
    this.f = -7;
}
const v23 = new F20();
const v24 = new F20();
const v25 = new F20();
function f26() {
    return v23;
}
function f27(a28) {
    const o45 = {
        [a28]: v24,
        m(a30, a31, a32, a33) {
            if (a31) {
                const v37 = -a31;
                v37 & 4001;
                4001 ^ v37;
            } else {
                for (let v40 = 0; v40 < 32; v40++) {
                    a32["codePointAt" + v40] = v40;
                }
                for (const v43 in a30) {
                    function f44() {
                        return this;
                    }
                }
            }
            return a30;
        },
    };
    o45 instanceof Uint16Array;
    o45[v23];
    return o45;
}
const v51 = f27(v25, v24, Uint16Array);
f27(v25);
f27(v51);
const v54 = [-1000000.0,1000.0,-5.540100498195459,-5.0,2.220446049250313e-16,1000000000000.0];
[0.5933077301169822,4.53564238653173,0.09718127795638731,2.220446049250313e-16,1000000000.0,0.12946129135091933];
const v56 = [-7.92607580612048e+306,-Infinity,9.046904697781734,1000000.0,NaN,59496.24991420959,-0.3385919249534126,1.0];
for (let v60 = 0; v60 < 32; v60++) {
    "object" + v60;
    v54[v18] = v60;
}
v54[9223372036854775807];
let {"a":v65,"length":v66,} = v56;
[v54,[[f26,v25,v66,v65]]];

new Array(127);
new Uint32Array(7);
new Int16Array(76);
new BigUint64Array(23);
function F18() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -7;
    this.a = -7;
    this.f = -7;
}
const v21 = new F18();
const v22 = new F18();
const v23 = new F18();
function f24() {
    return v21;
}
function f25(a26) {
    const o49 = {
        [a26]: v22,
        m(a28, a29, a30, a31) {
            if (a29) {
                for (let i35 = 0; i35 < 3; i35++) {
                    function f41() {
                        return i35;
                    }
                }
                const v43 = -a29;
                v43 & 4001;
                4001 ^ v43;
            } else {
                for (let v46 = 0; v46 < 32; v46++) {
                    a30["p" + v46] = v46;
                }
            }
            return a28;
        },
    };
    return o49;
}
const v50 = f25(v23);
f25(v23);
f25(v50);
const v53 = [-1000000.0,1000.0,-5.540100498195459,-5.0,2.220446049250313e-16,1000000000000.0];
[0.5933077301169822,4.53564238653173,0.09718127795638731,2.220446049250313e-16,1000000000.0,0.12946129135091933];
const v55 = [-7.92607580612048e+306,-Infinity,9.046904697781734,1000000.0,NaN,59496.24991420959,-0.3385919249534126,1.0];
const v58 = new Uint32Array(1024);
new Int16Array(v58, 1024, 1024);
for (let v64 = 0; v64 < 32; v64++) {
    v53["p" + v64] = v64;
}
v53[9223372036854775807];
let {"a":v69,"length":v70,} = v55;
[f24,v23,v70,v69];
[v53];
[v53,v53];

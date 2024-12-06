new WeakSet();
new BigUint64Array(1);
new BigUint64Array(6);
new Uint32Array(255);
new Uint32Array(497);
new Int8Array(512);
new Uint8ClampedArray(11);
function F21() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -7;
    this.a = -7;
    this.f = -7;
}
const v24 = new F21();
const v25 = new F21();
const v26 = new F21();
function f27() {
    return v24;
}
function f28(a29) {
    const o44 = {
        [a29]: v25,
        m(a31, a32, a33, a34) {
            if (a32) {
                const v38 = -a32;
                v38 & 4001;
                4001 ^ v38;
            } else {
                for (let v41 = 0; v41 < 32; v41++) {
                    a33["p" + v41] = v41;
                }
            }
            return a31;
        },
    };
    return o44;
}
const v45 = f28(v26);
f28(v26);
f28(v45);
const v48 = [-1000000.0,1000.0,-5.540100498195459,-5.0,2.220446049250313e-16,1000000000000.0];
[0.5933077301169822,4.53564238653173,0.09718127795638731,2.220446049250313e-16,1000000000.0,0.12946129135091933];
const v50 = [-7.92607580612048e+306,-Infinity,9.046904697781734,1000000.0,NaN,59496.24991420959,-0.3385919249534126,1.0];
for (let v54 = 0; v54 < 32; v54++) {
    v48["p" + v54] = v54;
}
v48[9223372036854775807];
let {"a":v59,"length":v60,} = v50;
[f27,v26,v60,v59];
[v48];
[v48,v48];

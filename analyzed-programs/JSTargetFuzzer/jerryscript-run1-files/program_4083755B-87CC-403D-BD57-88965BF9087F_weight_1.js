new Float32Array(627);
new BigUint64Array(16);
new Uint8ClampedArray(3);
const v10 = new Set();
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
    const o42 = {
        [a19]: v15,
        m(a21, a22, a23, a24) {
            if (a22) {
                const v28 = -a22;
                let v29 = 0;
                do {
                    new Uint8ClampedArray(v15);
                    v29++;
                } while (v29 < 0)
                v28 & 4001;
                4001 ^ v28;
            } else {
                for (let v39 = 0; v39 < 32; v39++) {
                    a23["p" + v39] = v39;
                }
            }
            return a21;
        },
    };
    return o42;
}
const v43 = f18(v16);
f18(v16);
f18(v43);
const v46 = [-1000000.0,1000.0,-5.540100498195459,-5.0,2.220446049250313e-16,1000000000000.0];
[0.5933077301169822,4.53564238653173,0.09718127795638731,2.220446049250313e-16,1000000000.0,0.12946129135091933];
const v48 = [-7.92607580612048e+306,-Infinity,9.046904697781734,1000000.0,NaN,59496.24991420959,-0.3385919249534126,1.0];
for (let v52 = 0; v52 < 32; v52++) {
    const v55 = Symbol.toPrimitive;
    const o59 = {
        [v55]() {
            this[Symbol.toStringTag] = v10;
            return v52;
        },
    };
    v46["p" + v52] = v52;
}
let v61 = v46[9223372036854775807];
let {"a":v63,"length":v64,} = v48;
const v68 = ++v61;
const v69 = v61 || 16;
Math.exp(v68);
!v68;
-256 * v69;
Math.clz32(v68);
[f17,v16,v64,v63];
[v46];
[v46,v46];

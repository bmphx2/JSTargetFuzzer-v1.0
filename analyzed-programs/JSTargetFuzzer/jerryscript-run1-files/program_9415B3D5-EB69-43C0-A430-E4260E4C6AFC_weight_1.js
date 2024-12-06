function f3() {
    return 0;
}
const v5 = new WeakSet();
function f6() {
    return f3;
}
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = f6;
    this.a = a9;
    this.b = v5;
}
new F7(f3, 536870888, 0);
new F7(536870888, 536870888, 0);
new F7(WeakSet, 0, 0);
class C15 extends WeakSet {
    m(a17, a18, a19) {
        function* f20(a21, a22, a23, a24) {
            new Float64Array(2456);
            new Float32Array(5);
            new BigUint64Array(158);
            yield a21;
            return f6;
        }
        return f20(1000, 1000, a17, 1000);
    }
}
new C15();
new C15();
new C15();
function F39() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -7;
    this.a = -7;
    this.f = -7;
}
const v42 = new F39();
const v43 = new F39();
const v44 = new F39();
function f45() {
    return v42;
}
function f46(a47) {
    const o65 = {
        [a47]: v43,
        m(a49, a50, a51, a52) {
            if (a50) {
                const v56 = super.a;
                try {
                    super.getUTCMonth(v56, a47, a47);
                } catch(e58) {
                }
                const v59 = -a50;
                v59 & 4001;
                4001 ^ v59;
            } else {
                for (let v62 = 0; v62 < 32; v62++) {
                    a51["p" + v62] = v62;
                }
            }
            return a49;
        },
    };
    return o65;
}
const v66 = f46(v44);
f46(v44);
f46(v66);
const v69 = [-1000000.0,1000.0,-5.540100498195459,-5.0,2.220446049250313e-16,1000000000000.0];
[0.5933077301169822,4.53564238653173,0.09718127795638731,2.220446049250313e-16,1000000000.0,0.12946129135091933];
const v71 = [-7.92607580612048e+306,-Infinity,9.046904697781734,1000000.0,NaN,59496.24991420959,-0.3385919249534126,1.0];
for (let v75 = 0; v75 < 32; v75++) {
    v69["p" + v75] = v75;
}
v69[9223372036854775807];
let {"a":v80,"length":v81,} = v71;
[f45,v44,v81,v80];
[v69];
[v69,v69];

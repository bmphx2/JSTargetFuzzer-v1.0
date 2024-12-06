const v3 = [9223372036854775807];
const v4 = [9223372036854775807,v3,2,v3,2];
const v5 = [v4];
function f6(a7, a8) {
    const o16 = {
        "g": v4,
        __proto__: v5,
        ...v3,
        "c": a7,
        valueOf(a10, a11, a12) {
            a12[a10] /= a8;
            return this;
        },
        "h": a8,
    };
    return o16;
}
f6(v3, 512);
const v18 = f6(v4, v3);
f6(v5, v4);
function f20(a21, a22) {
    const o29 = {
        set d(a24) {
            const v25 = super.e;
            [this,v5,a24,v25,v5];
            [512,v5,a21,[v25,v25,v3,v4]];
        },
        "a": 2,
        __proto__: v5,
        10000: a22,
        7: f6,
        ...a21,
        [a21]: 2,
    };
    return o29;
}
const v30 = f20(v18, 9223372036854775807);
const v31 = f20(512, 2);
f20(v30, 2);
function F33() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -7;
    this.a = -7;
    this.f = -7;
}
const v39 = [-16,4];
try { v39.slice(45103); } catch (e) {}
const o42 = {
    __proto__: v39,
    "d": -2,
    3943951267: 536870889,
    "a": true,
    "e": 45103,
};
const v43 = new F33();
const v44 = new F33();
const v45 = new F33();
function F46(a48, a49, a50) {
    if (!new.target) { throw 'must be called with new'; }
}
new Uint8Array(0);
function f54() {
    return v43;
}
function f55(a56) {
    const o71 = {
        [a56]: v44,
        m(a58, a59, a60, a61) {
            if (a59) {
                const v65 = -a59;
                v65 & 4001;
                4001 ^ v65;
            } else {
                for (let v68 = 0; v68 < 32; v68++) {
                    a60["p" + v68] = v68;
                }
            }
            return a58;
        },
    };
    return o71;
}
const v72 = f55(v45);
f55(v45);
f55(v72);
const v75 = [-1000000.0,1000.0,-5.540100498195459,-5.0,2.220446049250313e-16,1000000000000.0];
[0.5933077301169822,4.53564238653173,0.09718127795638731,2.220446049250313e-16,1000000000.0,0.12946129135091933];
const v77 = [-7.92607580612048e+306,-Infinity,9.046904697781734,1000000.0,NaN,59496.24991420959,-0.3385919249534126,1.0];
for (let v81 = 0; v81 < 32; v81++) {
    v31["p" + v81] = v81;
}
v75[9223372036854775807];
let {"a":v86,"length":v87,} = v77;
[f54,v45,v87,v86];
[v75];
[v43,v75];

9007199254740992 & -61054;
const v7 = Symbol.iterator;
const o16 = {
    [v7]() {
        let v9 = 10;
        const o15 = {
            next() {
                v9--;
                const v13 = v9 == 0;
                const o14 = {
                    "done": v13,
                    "value": v9,
                };
                return o14;
            },
        };
        return o15;
    },
};
const o27 = {
    ...null,
};
function F30() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -7;
    this.a = -7;
    this.f = null;
}
const v33 = new F30();
const v34 = new F30();
const v35 = new F30();
v33.a = v35;
const v38 = new Int8Array(1024);
const v41 = new BigInt64Array(7);
const v44 = new Uint32Array(0);
function f45() {
    return v33;
}
function f46(a47) {
    const o62 = {
        [a47]: v34,
        m(a49, a50, a51, a52) {
            if (a50) {
                const v56 = -a50;
                (v56 & 4001) ^ v56;
            } else {
                for (let v59 = 0; v59 < 32; v59++) {
                    a51["p" + v59] = v59;
                }
            }
            return a49;
        },
    };
    return o62;
}
const v63 = f46(v35);
f46(v35);
f46(v63);
const v66 = [-1000000.0,1000.0,-5.540100498195459,-5.0,2.220446049250313e-16,1000000000000.0];
[0.5933077301169822,4.53564238653173,0.09718127795638731,2.220446049250313e-16,1000000000.0,0.12946129135091933];
[-7.92607580612048e+306,-Infinity,9.046904697781734,1000000.0,NaN,59496.24991420959,-0.3385919249534126,1.0];
for (let v72 = 0; v72 < 32; v72++) {
    const t62 = "p";
    t62.g = 9007199254740990;
    v38[64] = null;
    v66.__proto__ = v44;
    v41[v72];
    const o75 = {
    };
    new Proxy(v38, o75);
    v66["p" + v72] = v72;
}
v66[9223372036854775807];
let {"a":v81,"length":v82,} = v63;
[f45,v35,v82,v81];
[v66];
[v66,v66];

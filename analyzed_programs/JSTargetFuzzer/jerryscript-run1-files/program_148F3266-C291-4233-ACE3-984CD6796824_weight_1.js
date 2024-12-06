function f0() {
    const o17 = {
        ["bigint"]: "object",
        toString(a5, a6) {
            const v7 = [6.973349147030067,171.57303756737974,-505.10465612423496,-1.5466406255861987e+308];
            const v8 = [2.0,2.0,-1.5692419889730935,-2.0,-2.2250738585072014e-308,-1.0,-4.2864880781288925e+307,-358960.8722329743,-0.0];
            const v9 = [1000000000000.0,7.733317176940815,-401225.6568590711,285436.14813226904];
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = v9;
            }
            new a6(v9, this);
            new F10(v8, v9);
            new F10(v7, a6);
            return a5;
        },
    };
    return o17;
}
const v18 = f0();
let v19 = f0();
f0();
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a24;
}
const v25 = new F21(F21, v18);
new F21(v25, v19);
new F21(v25, v19);
try {
    v19.valueOf = f0;
} finally {
    v25 + v25;
}
let v30 = v25.g;
v30 = 6n;
const v38 = new f0();
v19 = v38;
const v41 = new Date();
for (let v42 = 0; v42 < 5; v42++) {
    v41.setUTCSeconds();
}

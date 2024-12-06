function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 1925247329;
    this.c = 1925247329;
}
const v3 = new F0();
const v4 = new F0();
v3.c = v4;
v4 === F0;
const v6 = v4[268435439];
const v10 = new F0();
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v10;
    this.b = a19;
}
const v20 = new F14(0, v10, 0, v4);
const v21 = new F14(0, v10, v4, v4);
new F14(12, v3, v4, v4);
function F26() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -7;
    this.a = -7;
    this.f = -7;
}
const v29 = new F26();
const v30 = new F26();
const v31 = new F26();
function f32() {
    return v29;
}
function f33(a34) {
    const o49 = {
        [a34]: v30,
        m(a36, a37, a38, a39) {
            if (a37) {
                const v43 = -a37;
                v43 & 4001;
                4001 ^ v43;
            } else {
                for (let v46 = 0; v46 < 32; v46++) {
                    a38["p" + v46] = v46;
                }
            }
            return a36;
        },
    };
    return o49;
}
let v50 = f33(v31);
f33(v31);
[,...v50] = "function";
const v54 = ("function")[Symbol.iterator];
try { new v6(v21, ...v54, v20, ...-2); } catch (e) {}
f33(v50);
const v57 = [-1000000.0,1000.0,-5.540100498195459,-5.0,2.220446049250313e-16,1000000000000.0];
[0.5933077301169822,4.53564238653173,0.09718127795638731,2.220446049250313e-16,1000000000.0,0.12946129135091933];
const v59 = [-7.92607580612048e+306,-Infinity,9.046904697781734,1000000.0,NaN,59496.24991420959,-0.3385919249534126,1.0];
for (let v63 = 0; v63 < 32; v63++) {
    v57["p" + v63] = v63;
}
v57[9223372036854775807];
let {"a":v68,"length":v69,} = v59;
const o70 = {
    __proto__: v30,
    "c": v57,
};
[f32,v31,v69,v68];
[v57];
[v57,v57];

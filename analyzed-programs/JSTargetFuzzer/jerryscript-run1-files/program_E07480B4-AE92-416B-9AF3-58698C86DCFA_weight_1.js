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
const v20 = new F14(0, v10, v10, v4);
const v21 = new F14(0, v10, v4, v4);
new F14(12, v3, v4, v4);
function F26() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = "function";
    const t22 = 9007199254740990n;
    t22.a = -7;
    this.f = -7;
}
const v29 = new F26();
const v30 = new F26();
const v31 = new F26();
function f32() {
    return v29;
}
function f33(a34) {
    const o52 = {
        [a34]: v30,
        m(a36, a37, a38, a39) {
            if (a37) {
                const v43 = -a37;
                v43 & 4001;
                4001 ^ v43;
            } else {
                const o46 = {
                    "construct": f32,
                };
                new Proxy(v21, o46);
                for (let v49 = 0; v49 < 32; v49++) {
                    a38["p" + v49] = v49;
                }
            }
            return a34;
        },
    };
    return o52;
}
let v53 = f33(v31);
f33(v31);
[,...v53] = "function";
const v57 = ("function")[Symbol.iterator];
try { new v6(v21, ...v57, v20, ...-2); } catch (e) {}
f33(v53);
const v60 = [-1000000.0,1000.0,-5.540100498195459,-5.0,2.220446049250313e-16,1000000000000.0];
[0.5933077301169822,4.53564238653173,0.09718127795638731,2.220446049250313e-16,1000000000.0,0.12946129135091933];
const v62 = [-7.92607580612048e+306,-Infinity,9.046904697781734,1000000.0,NaN,59496.24991420959,-0.3385919249534126,1.0];
for (let v66 = 0; v66 < 32; v66++) {
    v60["p" + v66] = v66;
}
v60[9223372036854775807];
let {"a":v71,"length":v72,} = v62;
const o73 = {
    __proto__: v30,
    "c": 9007199254740990n,
};
[f32,v31,v72,v71];
[v60];
v20 % false;
v20[65536];
f32 >> f33;
[v60,v60];

new WeakSet();
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 536870912n;
    this.d = a14;
}
const v15 = new F11(-9, -9223372036854775807n);
new F11(5, -2147483647n);
new F11(6, 536870912n);
function F18() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -7;
    this.a = -7;
    this[255] = -42456.536662637256;
    const o24 = {
    };
    new Proxy(v15, o24);
    this.f = -7;
}
const v27 = new F18();
const v28 = new F18();
const v29 = new F18();
function f30() {
    return v27;
}
function f31(a32) {
    const o47 = {
        [a32]: v28,
        m(a34, a35, a36, a37) {
            if (a35) {
                const v41 = -a35;
                v41 & 4001;
                4001 ^ v41;
            } else {
                for (let v44 = 0; v44 < 32; v44++) {
                    a36["p" + v44] = v44;
                }
            }
            return a34;
        },
    };
    return o47;
}
const v48 = f31(v29);
f31(v29);
f31(v48);
const v51 = [-1000000.0,1000.0,-5.540100498195459,-5.0,2.220446049250313e-16,1000000000000.0];
[0.5933077301169822,4.53564238653173,0.09718127795638731,2.220446049250313e-16,1000000000.0,0.12946129135091933];
const v53 = [-7.92607580612048e+306,-Infinity,9.046904697781734,1000000.0,NaN,59496.24991420959,-0.3385919249534126,1.0];
for (let v57 = 0; v57 < 32; v57++) {
    v51["p" + v57] = v57;
}
v51[9223372036854775807];
let {"a":v62,"length":v63,} = v53;
[f30,v29,v63,v62];
[v51];
[v51,v51];

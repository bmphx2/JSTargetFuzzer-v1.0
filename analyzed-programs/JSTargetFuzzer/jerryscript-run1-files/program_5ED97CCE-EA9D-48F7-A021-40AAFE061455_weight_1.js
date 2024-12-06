function f0() {
}
function F10() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -7;
    this.a = -7;
    this.f = -7;
}
const v13 = new F10();
const v14 = new F10(f0, 5);
const v15 = new F10();
function f16() {
    return v13;
}
function f17(a18) {
    const o36 = {
        [a18]: v14,
        sign(a20, a21, a22, a23) {
            if (a21) {
                const v27 = -a21;
                v27 & 4001;
                4001 ^ v27;
            } else {
                for (let v30 = 0; v30 < 32; v30++) {
                    a22["p" + v30] = v30;
                }
            }
            function f34() {
                return f34;
            }
            const o35 = {
                "e": 1073741825,
            };
            Object.defineProperty(o35, "b", { configurable: true, set: f34 });
            return a20;
        },
    };
    return o36;
}
const v37 = f17(v15);
f17(v15);
f17(v37);
const v40 = [-5.053036345961656,-1000000000000.0,1.0191924700353596e+308,2.0,-3.757922538348211,Infinity,-591986.1346185035,-756028.714637496];
[0.5933077301169822,4.53564238653173,0.09718127795638731,2.220446049250313e-16,1000000000.0,0.12946129135091933];
const v42 = [-7.92607580612048e+306,-Infinity,9.046904697781734,1000000.0,NaN,59496.24991420959,-0.3385919249534126,1.0];
for (let v46 = 0; v46 < 32; v46++) {
    v40["p" + v46] = v46;
}
v40[9223372036854775807];
let {"a":v51,"length":v52,} = v42;
[f16,v15,v52,v51];
[v40];
[v40,v40];

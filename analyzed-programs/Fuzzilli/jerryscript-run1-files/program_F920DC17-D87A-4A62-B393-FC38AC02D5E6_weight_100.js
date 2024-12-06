let v0 = 2;
const v6 = [-9223372036854775808n,9223372036854775807n,v0];
const v8 = [16n,16n,[v6,28459,v6]];
let v9 = 60180;
let v10 = 9;
function f12(a13, a14) {
    const o23 = {
        4294967296: 16n,
        get a() {
            try {
                super.valueOf(a13);
            } catch(e17) {
            }
            return a14;
        },
        set e(a19) {
            let v20;
            try { v20 = a19(this, this, a19, v6, a13); } catch (e) {}
            try {
                super.valueOf(a14, this, v20, v9, a19);
            } catch(e22) {
            }
        },
    };
    return o23;
}
const v24 = f12(v6, v9);
f12(v6, 257);
const v26 = f12(v8, 257);
let v27 = "toString";
try { v26[v27](); } catch (e) {}
({"a":v9,"c":v27,"length":v9,...v0} = v8);
({"a":v10,} = v24);
257 / -9223372036854775808n;
for (let v30 = 0; v30 < 10; v30++) {
    try { v8.lastIndexOf(v30, v30); } catch (e) {}
    const v35 = 16n || 16n;
    Math.log2(v35);
    v35 | v35;
}

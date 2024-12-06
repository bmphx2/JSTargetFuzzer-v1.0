class C3 {
    static {
        try {
            super.abs("Ac");
        } catch(e6) {
        }
    }
    static b;
    f = -4.0;
    static #c;
    static #e = 16;
    static [16];
}
new C3();
const v8 = new C3();
const v9 = new C3();
const v10 = [2.8052462256590722,4.0,1.1308474268355612e+308,-1.7976931348623157e+308,-608.3505113903323];
const v11 = [-2.220446049250313e-16,0.1108080982346108,-7.473675092043182,-1000.0,-1000000000.0];
const v12 = [-1000000000000.0,2.2250738585072014e-308,Infinity,0.670958876750653,0.2824729135678983,1000.0];
function f13(a14, a15, a16) {
    const o27 = {
        "h": C3,
        __proto__: v8,
        "c": v12,
        set b(a18) {
            let v17 = this;
            function f19(a20, a21) {
                [v17] = a21;
                let {"b":v22,"c":v23,"f":v24,...v25} = v8;
                return v23;
            }
            f19(-4.0, a15);
        },
    };
    return o27;
}
f13(v11, v11, v12);
const v29 = f13(v10, v12, C3);
f13(v11, v12, 16);
const v31 = v10 ^ v8;
Object.defineProperty(v10, 5, { value: v11 });
let v32 = 0;
while (v32 < 10) {
    const v35 = v31 in v11;
    let v36;
    try { v36 = v9.setUint32("Ac", v35, v35, v29); } catch (e) {}
    v11.length;
    try { new v36(C3, v31, v31); } catch (e) {}
    v32++;
}

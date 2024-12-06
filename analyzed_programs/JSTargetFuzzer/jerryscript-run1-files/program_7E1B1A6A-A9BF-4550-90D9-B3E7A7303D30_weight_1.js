function f3() {
    return 9;
}
class C10 extends f3 {
    valueOf(a12, a13) {
        a12.__proto__;
        let v17 = 1073741823n;
        const o22 = {
            "defineProperty": f3,
            set g(a19) {
                ({"length":v17,} = "65537");
                try {
                    super.sin(-12, 9, this, -10);
                } catch(e21) {
                }
            },
            "preventExtensions": f3,
        };
        new Proxy(a12, o22);
        return -38301n;
    }
}
new C10();
new C10();
new C10();
const v30 = new Uint32Array(181);
let v32 = BigUint64Array;
let v33 = new v32(1);
let v34 = 253;
[v34,,v32,v33] = v30;
try { v32["abs"](181, v34, v32); } catch (e) {}
new Uint16Array(v34);
for (let i47 = 0; i47 < 2; i47++) {
    new Function("x");
    Uint32Array.name;
}
Function();

let v0 = [];
const v1 = [-5,257,-15355,-1779189037,-23436];
const v2 = [1363041446,-9223372036854775807,-5,65537,-268435456,-1073741824,65535,7,-1073741824,10];
const v3 = [-256,1073741824,-2];
function f5(a6, a7) {
    const o9 = {
        6: a7,
        get e() {
            v2.b = this;
            v0[7] %= v2;
            return this;
        },
        "b": v1,
        ...a7,
        "e": null,
        [a6]: v2,
        "a": a7,
    };
    return o9;
}
const v10 = f5(v1, v3);
f5(v3, v3);
const v12 = f5(v2, v0);
for (let v16 = 0; v16 < 32; v16++) {
    v10["p" + v16] = v16;
}
let [v19,v20] = v2;
v12 ^ v19;
v0 *= v3;
Object[v3] = v10;

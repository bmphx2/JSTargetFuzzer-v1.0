[-9223372036854775807,-2,64091,560671183,-14,4294967296,6];
const v9 = [9007199254740991,-10,1693238897,128,12216];
const v10 = [-2,268435441,-56415,-65537,-4294967297,-2147483648,1551541460,837622464,2147483647,97121022];
-536870912 << -536870912;
const v12 = v9[2044634903];
const v15 = new Date();
function f16() {
    let v17 = "message";
    v15[v17] <<= v12;
    const o18 = {
        "defineProperty": f16,
        "getOwnPropertyDescriptor": f16,
        "getPrototypeOf": Date,
        "has": v12,
    };
    new Proxy(v10, o18);
    const o24 = {
        get a() {
            v17 = this();
            return super.n();
        },
    };
    return o24;
}
f16();

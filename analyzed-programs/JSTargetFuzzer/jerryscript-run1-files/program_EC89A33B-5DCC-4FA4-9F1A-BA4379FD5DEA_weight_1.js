const v3 = [-536870912];
const v4 = [-536870912,v3,-536870912];
[v3,v4,7,1248036105,v4];
const v12 = [4,7,4294967297,-1,1000];
v12[-1] == v12;
function f16(a17) {
    const o18 = {
        "a": 1248036105,
    };
    return o18;
}
const v19 = f16("setBigInt64");
const o20 = {
    "get": f16,
    "set": f16,
};
const v22 = new Proxy(v19, o20);
v22.a *= -1000000000000.0;

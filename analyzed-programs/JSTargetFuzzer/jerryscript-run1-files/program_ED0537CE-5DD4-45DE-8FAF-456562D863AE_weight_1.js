const v6 = [2147483649];
const v7 = ["8","8",3528,"8","toString"];
const v8 = [2147483649,3528,v6,v7];
function f9(a10, a11, a12, a13) {
    const o14 = {
        "b": 3528,
        __proto__: a13,
        "g": a10,
        "sticky": 2147483649,
        "b": a13,
        "c": a11,
        "a": a13,
        [a10]: a10,
        "e": 2147483649,
        ["toString"]: a12,
        "MAX_SAFE_INTEGER": 2147483649,
    };
    return o14;
}
f9(v8, -33779, "8", v7);
f9(v8, -33779, "toString", v8);
f9(v6, "number", "number", v7);
const v19 = ("-1604200484").__proto__;
delete v19[v19];

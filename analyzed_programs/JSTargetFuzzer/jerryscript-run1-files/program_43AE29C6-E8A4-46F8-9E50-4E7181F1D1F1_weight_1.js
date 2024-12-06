const v5 = new Array(2371);
const v6 = [0,16375,1248483337,4];
const v7 = [-38161,-4294967295,4294967295,536870888];
const v8 = [-13,-1591882734,1073741824,16];
function f9(a10, a11) {
    const o24 = {
        "g": 65536,
        __proto__: v8,
        "a": a11,
        [Array]: a10,
        "b": a10,
        ...v6,
        2147483647: a11,
        ...a11,
        [v7](a13, a14, a15, a16) {
            const v18 = [a15,a11];
            const v20 = Reflect.apply(a14.forEach, v7, v18);
            try { v20(a13, v18, a16); } catch (e) {}
            super.f;
            a11 & a10;
            return v5;
        },
    };
    return o24;
}
f9(-256, v7);
f9(4096, v5);
f9(65536, v8);
const t25 = [2];
t25[0] **= -39166;

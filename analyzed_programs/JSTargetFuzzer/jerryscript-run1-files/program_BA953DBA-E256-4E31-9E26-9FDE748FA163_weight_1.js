const v3 = [-65535n,-1999426798n,-1999426798n,-1999426798n,-1999426798n];
const v4 = [5n,v3,-1999426798n,-65535n];
const v5 = [5n,-65535n,v4,v4];
function f6(a7, a8) {
    const o20 = {
        "g": a7,
        m(a10, a11, a12, a13) {
            const v14 = [-65535n,a8,a12,this,a8];
            [v4,v3,this];
            [v5,v3,a12,v14];
            return a7;
        },
        __proto__: a8,
        [v3]: a8,
    };
    return o20;
}
const v21 = f6(v4, -1999426798n);
f6(v5, v5);
f6(f6, v5);
const v29 = new BigInt64Array(v21);
for (const v31 of v29) {
    v31 != -536870912;
}

class C3 {
    static o(a5) {
        const v6 = -1000.0 && -1000.0;
        try { new v6(-1000000.0, v6); } catch (e) {}
        const o10 = {
            "maxByteLength": 251,
        };
        const v12 = new ArrayBuffer(1, o10);
        new BigInt64Array(v12);
        return NaN;
    }
}
const v15 = new C3();
const v16 = new C3();
new C3();
const v18 = [-1000.0];
[v18,-1000.0,v16];
[-1000000.0,v18,v15];
const v21 = [];
const v22 = [v21,v21];
const v23 = [v22,v22];
const v24 = [v22,v23,v22,v23,v22];
for (let i35 = 0, i36 = 10; i35 < i36; i35++, i36--) {
    new C3(...v24, i35, v15, i35);
}
function* f46(a47, a48) {
    function f49(a50, a51, a52, a53) {
        Object.defineProperty(v22, 1, { enumerable: true, value: a47 });
        a53[8] |= 4.0;
        return arguments;
    }
    f49();
    yield 45279;
    return 39366;
}
f46(v23, 39366);

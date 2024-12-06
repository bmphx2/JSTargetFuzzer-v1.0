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
for (let [i37, i38] = (() => {
        function f33() {
            const o34 = {
            };
            return o34;
        }
        return [0, 10];
    })();
    i37 < i38;
    i37++, i38--) {
    new C3(...v24, i37, v15, i37);
}
function* f48(a49, a50) {
    function f51(a52, a53, a54, a55) {
        Object.defineProperty(v22, 1, { enumerable: true, value: a49 });
        a55[8] |= 4.0;
        return arguments;
    }
    f51();
    yield 45279;
    return 39366;
}
f48(v23, 39366);

function f0() {
    let v2 = -1000.0;
    const o9 = {
        __proto__: 9007199254740991,
        ...1401,
        p(a5, a6) {
            a6?.[1];
            const o8 = {
                "c": 1401,
                "h": 9007199254740991,
                "e": v2,
            };
            v2 = a5;
            return 9007199254740991;
        },
        ...v2,
        ...v2,
        ...v2,
    };
    return o9;
}
f0();
const v11 = f0();
const v12 = f0();
const v13 = [v12,v12,f0,v12,v12];
[f0,v11,[v11,f0,v12]];
new Uint32Array(211);
new Float32Array(257);
new Float64Array(128);
try { v13.flatMap(f0, Uint32Array); } catch (e) {}
new BigInt64Array(127);
new Float32Array(256);
new Uint32Array(4096);

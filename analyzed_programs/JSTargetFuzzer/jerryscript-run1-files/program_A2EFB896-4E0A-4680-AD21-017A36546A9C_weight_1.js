function f0() {
    const o34 = {
        set g(a5) {
            -268435456 - a5;
            let v9 = --a5;
            Math.fround(v9);
            Math.pow(v9, v9);
            --v9;
            const v13 = [];
            try { v13.findIndex(); } catch (e) {}
            const v21 = Symbol.toPrimitive;
            const o28 = {
                [v21]() {
                    try { this["o"](v21, "o"); } catch (e) {}
                    return -268435456;
                },
            };
            const o29 = {
                "maxByteLength": 4294967295,
            };
            new ArrayBuffer(1024, o29);
            new Float64Array(-536870912);
        },
    };
    return -13306;
}
f0();
f0();
f0();
new Int8Array(8);
new Uint16Array(1024);
new BigUint64Array(7);
const v49 = new BigInt64Array(129);
v49["reduceRight"](print);

function f1() {
    const o14 = {
        [undefined]() {
            let v3 = 0;
            while (v3 < 8) {
                const o8 = {
                    "maxByteLength": 9,
                };
                const v10 = new ArrayBuffer(9, o8);
                new Uint32Array(v10);
                v3++;
            }
            return undefined;
        },
    };
    return o14;
}
f1();
f1();
f1();
Function(undefined);
-Infinity < -65537n;

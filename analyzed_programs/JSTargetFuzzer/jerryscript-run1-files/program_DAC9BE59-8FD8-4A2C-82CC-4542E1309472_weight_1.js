const v1 = new Date();
function f5(a6) {
    const o19 = {
        [a6](a8, a9, a10, a11) {
            const o14 = {
                "maxByteLength": 16,
            };
            const v16 = new ArrayBuffer(16, o14);
            const v18 = new a9(v16);
            return v18;
        },
    };
    return v1;
}
f5(1073741824);
f5(f5);
f5(268435439);
Date.parse(3584);

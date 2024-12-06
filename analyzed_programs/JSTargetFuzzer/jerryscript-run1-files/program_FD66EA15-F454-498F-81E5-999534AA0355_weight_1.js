function f3(a4) {
    for (let v5 = 0; v5 < 5; v5++) {
        const v6 = `
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
            }
        `;
        eval(v6);
    }
    const o24 = {
        [a4](a14) {
            this.f;
            this.g;
            const o19 = {
                "maxByteLength": 5,
            };
            const v21 = new ArrayBuffer(-36711, o19);
            new f3(v21);
            return -54614;
        },
    };
    return o24;
}
f3(-54614);
f3(-2147483647);
f3(-54614);
new Float64Array(1000);
try {
    new WeakSet(WeakSet);
} catch(e36) {
}

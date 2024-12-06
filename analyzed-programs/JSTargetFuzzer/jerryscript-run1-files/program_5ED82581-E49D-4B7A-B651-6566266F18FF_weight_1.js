function f0() {
    const o12 = {
        get a() {
            const t3 = "2";
            t3[3] = this;
            const o7 = {
                "maxByteLength": 65536,
            };
            const v9 = new ArrayBuffer(3, 3);
            new Uint32Array(v9);
            return o7;
        },
    };
    return o12;
}
f0();
f0();
f0();
const v23 = Symbol.toPrimitive;
const o26 = {
    [v23]() {
        super.d;
    },
};

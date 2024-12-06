function f6() {
    return "m";
}
function f7(a8, a9, a10) {
    const o30 = {
        ["isNaN"]: 2147483649,
        "a": 536870887,
        8: 1448434433,
        set d(a12) {
            const o15 = {
                "maxByteLength": 10000,
            };
            const v17 = new ArrayBuffer(a12, o15);
            const v19 = new Uint32Array(v17);
            function F20(a22, a23, a24) {
                if (!new.target) { throw 'must be called with new'; }
                this.f = a24;
            }
            for (const v25 of v19) {
                o15.__proto__ = v19;
            }
            v19.byteLength += 536870887;
            a8.__proto__;
            new F20("m", "m", F20);
            const v28 = new F20("isNaN", "object", 2147483649);
            new F20(a9, v28, v28);
        },
    };
    return o30;
}
f7(f6, f7(f7(f7, "isNaN", "object"), f7, "m"), "isNaN");
eval(f6);

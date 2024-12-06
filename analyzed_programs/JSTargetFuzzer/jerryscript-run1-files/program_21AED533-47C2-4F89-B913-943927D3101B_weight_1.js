const v4 = Symbol.toPrimitive;
const o9 = {
    [v4]() {
        let v5 = this;
        v5 >>>= v5;
        for (let v6 = 0; v6 < 32; v6++) {
            Symbol["p" + v6] = v6;
        }
        return 536870887;
    },
};
function f10() {
    const o11 = {
        "e": 536870887,
    };
    const o14 = {
        "maxByteLength": 2527,
    };
    const v16 = new SharedArrayBuffer(177, o14);
    new Uint32Array(v16);
    return 10285;
}
1n == 886.0009926550579;

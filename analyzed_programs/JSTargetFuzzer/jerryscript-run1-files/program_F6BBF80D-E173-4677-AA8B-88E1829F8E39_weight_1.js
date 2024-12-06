const v4 = Symbol.toPrimitive;
const o14 = {
    [v4]() {
        let v5 = this;
        v5 >>>= v5;
        for (let v6 = 0; v6 < 32; v6++) {
            v5 % 1024;
            try { ("p").concat(1024); } catch (e) {}
            Symbol["p" + v6] = v6;
        }
        return 536870887;
    },
};
function f15() {
    const o16 = {
        "e": 536870887,
    };
    const o19 = {
        "maxByteLength": 2527,
    };
    const v21 = new SharedArrayBuffer(177, o19);
    new Uint32Array(v21);
    return 10285;
}
1n == 886.0009926550579;

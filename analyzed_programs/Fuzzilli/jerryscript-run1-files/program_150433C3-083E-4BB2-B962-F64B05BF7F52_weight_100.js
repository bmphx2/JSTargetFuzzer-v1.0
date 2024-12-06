new Float32Array(6);
new Float32Array(4096);
const v14 = new Float64Array(4096);
const v15 = `
    try {
    const t0 = "ue";
    t0(v14, 4096, v15);
    } catch (e) {}
`;
eval(v15);
const v20 = Symbol.toPrimitive;
const o25 = {
    [v20]() {
        let v21 = this;
        --v21;
        super.f = v21;
        ("prototype")["localeCompare"](Float64Array, ..."localeCompare", Float32Array, ..."localeCompare");
        return 6;
    },
};

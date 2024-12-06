function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 0;
    this.a = 0;
    this.d = 0;
}
const v3 = new F0();
const v4 = new F0();
const o11 = {
    toString(a7) {
        let v8;
        try { v8 = a7(); } catch (e) {}
        const v9 = ~v8;
        function f10() {
            return v9;
        }
        return "pyd";
    },
    536870889: "pyd",
};
const v12 = new F0();
function f13() {
    return v12;
}
function f14(a15) {
    new Int8Array(15);
    new Float32Array(3462);
    const o28 = {
        __proto__: v4,
        "h": v3,
        "g": v3,
        "a": a15,
        184: F0,
        128: F0,
        [v4](a23, a24) {
            return a23;
        },
    };
    return o28;
}
f14(v4);
f14(v4);
f14(v3);
const v36 = new Map();
v36.get();

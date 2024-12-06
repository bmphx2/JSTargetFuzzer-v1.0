function f0() {
    const o13 = {
        "g": "p",
        __proto__: "p",
        10: 57986,
        268435440: 57986,
        [1.0]: "p",
        set d(a5) {
            const o8 = {
                "maxByteLength": 128,
            };
            const v10 = new SharedArrayBuffer(13, o8);
            new Int8Array(v10);
        },
    };
    return o13;
}
const v14 = f0();
const v15 = f0();
const v16 = f0();
const v17 = [v15];
const v18 = [v16,v16,v16,v14];
const v19 = [v18,f0,f0];
function F20(a22, a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a25;
    this.g = v16;
    this.d = f0;
}
const v26 = new F20(v19, v16, v14, v15);
new F20(v17, v15, v26, v19);
const v28 = new F20(v18, v16, v15, v17);
function f29() {
    return v28;
}
[9389,10,1934650028,536870912,512,-13];
[-4294967296,129,-1,-8,-13053,-896628093,65536,3,15190,-13];
[4294967296,34771,39526,129,12,-467133758,-1,-2131045349,268435441,-1024];
const o41 = {
    valueOf(a34, a35) {
        const v38 = new ArrayBuffer(193);
        new Uint32Array(v38);
        return Uint32Array;
    },
};
try { o41.p(); } catch (e) {}

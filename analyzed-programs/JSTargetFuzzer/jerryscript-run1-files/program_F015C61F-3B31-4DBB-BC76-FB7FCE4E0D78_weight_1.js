const v5 = new Int32Array(5);
const v8 = new Int8Array(180);
new Int32Array(128);
const v14 = new Float32Array();
const o15 = {
    __proto__: v14,
    "h": 128,
    1073741825: v5,
    "f": v8,
};
const v16 = v14.__proto__;
for (let i18 = 0; i18 < 0; i18++) {
    const t12 = "setUTCDate";
    t12[65535] = 128;
    const t14 = "setUTCDate";
    t14[751] = v16;
}
try { ("setUTCDate").lastIndexOf(v16); } catch (e) {}

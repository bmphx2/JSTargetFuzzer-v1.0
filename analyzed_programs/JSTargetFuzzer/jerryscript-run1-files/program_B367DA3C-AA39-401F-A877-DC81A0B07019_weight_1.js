const v5 = new Int32Array(5);
const v8 = new Int8Array(180);
new Int32Array(128);
new Boolean();
const v16 = new Float32Array();
const o17 = {
    __proto__: v16,
    "h": 128,
    1073741825: v5,
    "f": v8,
};
const v18 = v16.__proto__;
for (let i20 = 0; i20 < 0; i20++) {
    const t13 = "setUTCDate";
    t13[65535] = 128;
    const t15 = "setUTCDate";
    t15[751] = v18;
}
try { ("setUTCDate").lastIndexOf(v18); } catch (e) {}

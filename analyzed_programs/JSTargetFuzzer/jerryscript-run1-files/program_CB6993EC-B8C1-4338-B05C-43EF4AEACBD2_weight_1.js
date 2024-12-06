function f3(a4) {
    const o11 = {
        get f() {
            super.f = 1659354410;
            const v6 = this.__proto__;
            try { v6.freeze(v6, a4); } catch (e) {}
            return a4;
        },
        "b": a4,
        __proto__: 1659354410,
        "h": -1525387771,
        "f": a4,
        "a": a4,
    };
    return o11;
}
f3(1659354410);
f3(1073741823);
f3(1659354410);
new Uint32Array(1290);
new BigUint64Array(128);
new Int8Array(4);
const o25 = {
    "g": Int8Array,
};
ArrayBuffer.isView(o25.g);

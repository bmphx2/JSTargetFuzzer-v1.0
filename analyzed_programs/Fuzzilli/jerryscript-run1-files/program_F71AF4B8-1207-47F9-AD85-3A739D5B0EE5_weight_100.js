function f3(a4, a5) {
    const o18 = {
        ...a5,
        __proto__: a5,
        n(a7) {
            const t5 = this.a;
            t5[a5] = a7;
            new Float32Array(64);
            new BigInt64Array(5);
            new Uint32Array(129);
            return this;
        },
    };
    return o18;
}
f3(48219, 48219);
const v20 = f3(268435439, -1073741824);
f3(-1073741824, -1073741824);
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v20;
}
const v26 = new F22(F22, 268435439);
new F22(-1073741824, -1073741824);
new F22(48219, -1073741824);
new F22(-1073741824, 268435439);
new f3(48219, v26);
for (const v34 of -1000.0) {
    break;
    const o40 = {
        "maxByteLength": 4096,
    };
    const v42 = new SharedArrayBuffer(4096, o40);
    new DataView(v42);
}

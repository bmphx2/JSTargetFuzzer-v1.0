class C6 {
    112;
    static p(a8, a9, a10, a11) {
        const o14 = {
            "maxByteLength": 194,
        };
        const v16 = new SharedArrayBuffer(9, o14);
        new DataView(v16);
        return "for";
    }
}
const v19 = new C6();
const v20 = new C6();
new C6();
Object.defineProperty(v20, v19, { writable: true, configurable: true, value: C6 });
async function* f22(a23, a24, a25) {
    try { new a23(a23); } catch (e) {}
    const v27 = a23 ** a23;
    let v28;
    try { v28 = a25.trim(); } catch (e) {}
    await v28?.[v27];
    yield v28;
    return v27;
}
f22("o", v19, "for");

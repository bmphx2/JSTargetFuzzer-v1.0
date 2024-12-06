function f0() {
    const v1 = `
        WeakSet();
    `;
    9007199254740991 / v1;
}
const v9 = new Int32Array(0);
const v12 = new Uint16Array(0);
const v15 = new Int16Array(v9);
class C16 {
}
const v17 = new C16(v15);
const v19 = v17[v12];
try {
    v19(v15);
} catch(e21) {
    class C22 {
        constructor(a24) {
            const v26 = new Uint32Array(this, Uint32Array);
            const v27 = e21 <= v26;
            try { new v27(-583.1760893759623, -583.1760893759623, Uint32Array); } catch (e) {}
        }
    }
    new C22();
} finally {
}

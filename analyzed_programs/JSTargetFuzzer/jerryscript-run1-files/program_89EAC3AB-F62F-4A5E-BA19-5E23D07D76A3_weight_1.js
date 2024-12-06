new Uint32Array(3196);
new Int8Array(6);
const v14 = new Int16Array(5);
const v16 = new Float64Array();
try {
    const v18 = new Proxy(v16);
    class C19 {
    }
    const v20 = new C19();
    const v22 = new Uint32Array(v20, v18, v14);
    v22.includes(Uint32Array);
} catch(e24) {
}

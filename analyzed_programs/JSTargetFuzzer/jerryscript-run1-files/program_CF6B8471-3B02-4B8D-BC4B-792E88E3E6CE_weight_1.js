function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1073741824n;
    F3.e = F3;
    const t4 = 1073741824n;
    t4.g = 8n;
}
new F3(1073741824n);
const v7 = new F3(8n);
new F3(8n);
const v11 = new Uint16Array(1024);
const v14 = new Uint32Array(v7);
new Int8Array(4017);
function f18() {
    return f18;
}
function f19() {
    const o22 = {
        "b": v7,
        "e": v14,
        p() {
            for (const v21 in this) {
                break;
            }
            return v11;
        },
    };
    return o22;
}
const v25 = f19().p();
Object.defineProperty(v25, v25, { writable: true, value: 512 });

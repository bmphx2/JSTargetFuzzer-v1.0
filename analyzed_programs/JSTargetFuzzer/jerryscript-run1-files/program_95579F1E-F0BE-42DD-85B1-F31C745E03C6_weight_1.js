function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1073741824n;
    this.e = F3;
    this.g = 8n;
}
new F3(1073741824n);
const v7 = new F3(8n);
new F3(8n);
new Uint16Array(1024);
new Uint32Array(129);
new Int8Array(4017);
function f18() {
    return f18;
}
function f19() {
    const o22 = {
        "b": v7,
        "e": f19,
        p() {
            for (const v21 in this) {
                break;
            }
            return Uint16Array;
        },
    };
    return o22;
}
const v25 = f19().p();
Object.defineProperty(v25, v25, { writable: true, value: 512 });

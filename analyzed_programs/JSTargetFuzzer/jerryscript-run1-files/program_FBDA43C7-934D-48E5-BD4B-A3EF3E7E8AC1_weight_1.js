new Uint32Array(141);
new Uint32Array(204);
new Float64Array(1752);
const v9 = [];
const o11 = {
    p() {
        this[v9] = this;
        return v9;
    },
};
const v15 = [];
class C16 {
    valueOf(a18, a19) {
        const v20 = `
            const t14 = v15.__proto__;
            delete t14?.d;
        `;
        eval(v20);
    }
}
const v25 = new C16();
async function f26(a27, a28) {
    a27 /= C16;
    return 2147483648;
}
f26(v25);

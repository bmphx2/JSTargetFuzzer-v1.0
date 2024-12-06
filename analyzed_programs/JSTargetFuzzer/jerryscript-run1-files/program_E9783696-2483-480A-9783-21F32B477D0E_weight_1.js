const v0 = [536870889,9007199254740990,4294967295,1046027572];
const v1 = [59966,15,-1419182562,2147483647];
const v2 = [-65536,-10,536870912,-65537,-14,-38777,10];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v1;
    this.d = v0;
}
new F3(v2, v1);
new F3(v0, v2);
new F3(v0, v1);
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -9;
}
const v15 = new F12();
const o17 = {
    ...v15,
    get b() {
        return this;
    },
};
new Float32Array(1000);
new Float64Array(64);
new Uint8Array(255);
const v25 = [];
class C26 {
    valueOf(a28, a29) {
        const v30 = `
            const t29 = v25.__proto__;
            delete t29?.d;
        `;
        eval(v30);
    }
}
const v35 = new C26();
async function f36(a37, a38) {
    a37 /= C26;
    return v25;
}
f36(v35);
("-15").matchAll();
new Int32Array(1);

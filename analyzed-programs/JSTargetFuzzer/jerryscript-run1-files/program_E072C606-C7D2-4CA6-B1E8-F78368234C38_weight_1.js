function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 4;
}
new F0();
new F0();
new F0();
new BigInt64Array(5);
const o10 = {
    ["prototype"]: "prototype",
};
new Int16Array(257);
new Float32Array(909);
class C17 {
    valueOf(a19, a20) {
        const v21 = `
            delete this?.d;
        `;
        eval(v21);
    }
}
const v25 = new C17();
async function f26(a27, a28) {
    return a27 /= C17;
}
f26(v25);

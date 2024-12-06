function f0() {
}
const v1 = [f0,f0,f0,f0,f0];
[v1,v1,v1,v1];
[v1,f0,v1,f0,f0];
new Uint8Array(1000, Uint8Array, 1000);
new SyntaxError(1738, f0, SyntaxError, v1);
new String(-268435456);
function F13() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -51901;
}
const v16 = new F13();
const v17 = new F13();
function f18(a19, a20) {
    const o26 = {
        ...v17,
        __proto__: v16,
        m(a22, a23, a24, a25) {
            return a25;
        },
    };
    return o26;
}
for (const v28 in f18()) {
    f18().d;
    v17[Symbol.unscopables] = v17;
}

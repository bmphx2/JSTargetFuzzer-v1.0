function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1000n;
}
const v6 = new F3(-1843124517n);
new F3(v6);
new F3(-1843124517n);
function f13(a14, a15) {
    const o16 = {
    };
    return v6;
}
const v17 = f13();
for (let i = 0; i < 5; i++) {
    Object.defineProperty(v17, 32753n, { enumerable: true, get: f13 });
}

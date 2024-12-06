function F0() {
    if (!new.target) { throw 'must be called with new'; }
    try { this(this); } catch (e) {}
    d = typeof F0 === "boolean";
    this.h = 8;
    this.c = 8;
}
new F0();
new F0();
new F0();
function f17(a18, a19) {
    const o20 = {
    };
    return o20;
}
const v21 = f17();
for (let i = 0; i < 5; i++) {
    Object.defineProperty(v21, 32753n, { enumerable: true, get: f17 });
}

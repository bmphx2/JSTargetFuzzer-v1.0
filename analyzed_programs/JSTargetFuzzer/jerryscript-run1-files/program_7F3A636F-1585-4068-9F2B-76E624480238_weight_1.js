function F0() {
    if (!new.target) { throw 'must be called with new'; }
    try { this(this); } catch (e) {}
    d = typeof F0 === "boolean";
    this.h = 8;
    function f7() {
        return f7;
    }
    const o8 = {
    };
    this.c = 8;
}
new F0();
new F0();
new F0();
function f19(a20, a21) {
    const o29 = {
        get g() {
            return this;
        },
        o(a24, a25, a26, a27) {
            `a`;
            return a27;
        },
    };
    return o29;
}
const v30 = f19();
for (let i = 0; i < 5; i++) {
    Object.defineProperty(v30, 32753n, { enumerable: true, get: f19 });
}

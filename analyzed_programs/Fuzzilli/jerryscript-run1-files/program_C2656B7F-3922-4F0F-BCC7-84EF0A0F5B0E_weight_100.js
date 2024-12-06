function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 15;
    this.c = 15;
    this.f = 15;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o18 = {
        __proto__: a7,
        toString(a9, a10) {
            ++a10;
            ~-1.0010004795204814 | a7;
            return a7;
        },
    };
    return o18;
}
f6(v4);
f6(v5);
f6(v5);
new Uint16Array(Uint16Array, Uint16Array, Uint16Array);

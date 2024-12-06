function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 15;
    this.c = 15;
    this.f = 15;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function f6(a7) {
    const o18 = {
        __proto__: a7,
        toString(a9, a10) {
            let v8 = this;
            ++v8;
            ~-1.0010004795204814;
            16 | a7;
            return 2147483647;
        },
    };
    return a7;
}
f6(v5);
f6(v5);
f6(v3);
new Uint16Array(Uint16Array, Uint16Array, Uint16Array);

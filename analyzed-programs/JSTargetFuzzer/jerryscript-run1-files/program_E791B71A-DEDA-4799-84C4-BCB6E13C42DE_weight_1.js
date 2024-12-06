[];
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a12;
    this.h = a12;
    this.d = a11;
}
new F7("b", "b", "bigint", "bigint", 65537, 3);
const v14 = new F7("number", "b", "bigint", "bigint");
new F7("bigint", "number", "b", "bigint");
const v17 = new Uint16Array(Uint16Array, Uint16Array, Uint16Array, v14);
const o22 = {
    m(a19, a20, a21) {
        return this;
    },
};
Reflect.set(o22.m, v17);

function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 16;
}
const v3 = new F0();
const v4 = new F0(v3, v3);
new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a8;
}
const v9 = new F6(v4);
new F6(v4);
new F6(v4);
`string${Uint16Array}2147483647${[v9]}isSafeInteger${Uint16Array}bigint`;

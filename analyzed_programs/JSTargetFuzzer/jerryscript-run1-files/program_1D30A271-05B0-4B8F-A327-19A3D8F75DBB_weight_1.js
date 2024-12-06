function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 8;
    F0.f = 8;
}
new F0();
new F0();
new F0();
new Int8Array(255);
new Int32Array(3);
new BigUint64Array(4);
`string${Uint16Array}2147483647${[]}isSafeInteger${Uint16Array}bigint`;

function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a5.a = a5;
    this.b = 44752n;
    this.e = 2n;
}
new F3(44752n, 44752n);
new F3(2n, 2n);
new F3(2n, -1073741824n);
new BigUint64Array(2);
new BigUint64Array(180);
new Int8Array(5);
`string${Uint16Array}2147483647${[]}isSafeInteger`;

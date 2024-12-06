function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a5;
}
const v6 = new F3(536870912n);
new F3(-1024n);
new F3(-1024n);
new BigInt64Array(872);
const v14 = new Uint8ClampedArray(10);
const v17 = new BigInt64Array(12);
for (const v18 of v14) {
    const t11 = "valueOf";
    t11[BigInt64Array] += 12;
}
const v24 = [872,872];
Reflect.apply(v17.slice, v6, v24);

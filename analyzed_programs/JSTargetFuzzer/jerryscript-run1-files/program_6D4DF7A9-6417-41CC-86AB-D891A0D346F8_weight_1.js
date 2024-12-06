const v1 = new WeakSet();
const v4 = new Float64Array(129);
new Int8Array(v4);
new Uint8ClampedArray(4);
const v12 = new BigUint64Array(v1);
for (const v15 of v12) {
    const v17 = ["map"];
    Reflect.apply(AggregateError.from, v15, v17);
}

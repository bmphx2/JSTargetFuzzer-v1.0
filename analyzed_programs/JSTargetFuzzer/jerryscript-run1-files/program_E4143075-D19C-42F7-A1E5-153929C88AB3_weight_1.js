function f2() {
    return f2;
}
function f3() {
    const o6 = {
        "b": f2,
        "e": f3,
        p() {
            for (const v5 in this) {
                break;
            }
            return f2;
        },
    };
    return o6;
}
const v9 = f3().p();
Object.defineProperty(v9, v9, { writable: true, value: 512 });
new Int8Array(50);
new BigUint64Array(12);
new Uint16Array(257);
Number(536870887n);

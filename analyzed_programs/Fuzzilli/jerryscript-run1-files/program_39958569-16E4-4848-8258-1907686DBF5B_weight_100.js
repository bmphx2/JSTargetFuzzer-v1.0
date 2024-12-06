function f3(a4) {
    const o12 = {
        __proto__: 10000,
        get c() {
            this.d = this;
            const v7 = a4.toPrimitive;
            const o11 = {
                [a4]() {
                    let v9;
                    try { v9 = new v7(10000, this); } catch (e) {}
                    v9 instanceof v9;
                    return 1;
                },
            };
            return a4;
        },
        [a4]: a4,
    };
    return o12;
}
f3(-55858);
f3(10000);
f3(-55858);
new Uint32Array(249);
new BigInt64Array(189);
new Int8Array(155);
const v34 = new Uint8Array(255);
new Int16Array(4);
new Uint16Array(4096);
function f41(a42, a43, a44, a45) {
    const o50 = {
        get e() {
            super.g = Int16Array;
            [-1];
            [-2147483647,-9223372036854775807,22869,6,-662153035,1100027444,268435441];
            return [-2147483647,8824];
        },
        "e": 4,
        "h": 4096,
        [4096]: a44,
        "f": 255,
        "a": a42,
    };
    return o50;
}
f41(4096, 4, 4, 4);
f41(4096, 4096, 255, 4096);
f41(255, 255, 4, 4096);
var c = f41;
try { v34.forEach(f41); } catch (e) {}
let v55 = 0;
while (v55 < 2) {
    !4;
    v55++;
}

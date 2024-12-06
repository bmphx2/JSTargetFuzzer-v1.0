function f1() {
    let v2 = 4294967296n;
    v2 **= 1000n;
    const o18 = {
        [null]() {
            this.a = null;
            return this;
        },
        "d": null,
        get b() {
            let v5 = this;
            const v9 = v5++;
            Object.defineProperty(Math, 1073741824, { configurable: true, enumerable: true, get: f1 });
            const v10 = Math[6];
            let v11;
            try { v11 = new v10(null, v5, 51370, f1); } catch (e) {}
            let [v12] = v10;
            v11.g = v12;
            Math.log(v9);
            let v14 = v9 || null;
            ~(-276541.9516019586);
            ++v14;
            return v14;
        },
        "a": 1000n,
        "h": 1000n,
        [null]: f1,
        "e": 1000n,
        137: f1,
    };
    return o18;
}
const v19 = f1(f1, f1);
for (let v20 = 0; v20 < 32; v20++) {
    v19["p" + v20] = v20;
}
f1(v19, f1);
f1();
new BigInt64Array(9);
new Uint8Array(1);
new Uint8ClampedArray(6);
const v39 = new Date(undefined);
let v40 = [v39];
--v40;

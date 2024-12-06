function f1() {
    const o9 = {
        o() {
            function f3() {
                return this;
            }
            return this;
        },
        get h() {
            const v7 = new Array(3849);
            Object.defineProperty(this, v7, { configurable: true, enumerable: true, get: Array, set: Array });
            try { Array.isArray(undefined); } catch (e) {}
            return undefined;
        },
    };
    return o9;
}
const v10 = f1();
f1();
f1();
const v15 = new Uint8ClampedArray(10);
let v16 = 3283;
const v18 = new Uint16Array(v16);
new BigInt64Array(4);
for (const v22 of v15) {
    const v24 = new Date();
    Uint8ClampedArray - Date;
    Object.defineProperty(v24, 4, { writable: true, value: v10 });
}
v16 &&= v16;
try { v18.indexOf(v15, 10); } catch (e) {}

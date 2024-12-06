function f0() {
}
new Uint8Array(1024);
new Int16Array(256);
new Int8Array(1000);
const v12 = new BigUint64Array(85);
new Int16Array(11);
new Int8Array(1);
const v20 = [];
let v21 = v12.reverse;
Reflect.apply(v21, v12, v20);
v21 &&= 256;
new WeakMap();
const v26 = Symbol.iterator;
const o35 = {
    [v26]() {
        let v28 = 10;
        const o34 = {
            next() {
                v28--;
                const v32 = v28 == 0;
                const o33 = {
                    "done": v32,
                    "value": v28,
                };
                return o33;
            },
        };
        return o34;
    },
};

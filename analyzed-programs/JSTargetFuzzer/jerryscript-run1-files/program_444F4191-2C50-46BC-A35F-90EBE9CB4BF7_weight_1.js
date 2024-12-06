new Uint16Array(1024);
const v12 = new Int32Array(14);
new Uint8ClampedArray(24);
const t3 = "65536";
t3[4] = v12;
const v24 = Symbol.iterator;
const o33 = {
    [v24]() {
        let v26 = 10;
        const o32 = {
            next() {
                v26--;
                const v30 = v26 == 0;
                const o31 = {
                    "done": v30,
                    "value": v26,
                };
                return o31;
            },
        };
        return o32;
    },
};
const v35 = new Int8Array();
v35.fill("RMF", 257, -1180432857);

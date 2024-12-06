new Set();
const v10 = Symbol.iterator;
const o19 = {
    [v10]() {
        let v12 = 10;
        const o18 = {
            next() {
                v12--;
                const v16 = v12 == 0;
                const o17 = {
                    "done": v16,
                    "value": v12,
                };
                return o17;
            },
        };
        return o18;
    },
};
new Date();
new Uint8ClampedArray(2640);
new Float64Array(9);
new Float32Array(16);
let v30 = 10;
for ([-3.0,1.7182266648454853e+308,331.02351975919237,-1e-15,-4.0,-3.0,-Infinity]; v30--;) {
}

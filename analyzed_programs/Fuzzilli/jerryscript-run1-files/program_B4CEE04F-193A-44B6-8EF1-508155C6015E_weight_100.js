function f0() {
}
new Set();
let v4 = Int32Array;
new v4(1);
const v8 = new Int16Array(841);
const v11 = new Float64Array(1000);
v11.buffer /= 1;
[v4++,841];
[v8,v8,v11];
[v11,841,Float64Array];
v11.byteLength;
v8["entries"]();
const v20 = Symbol.iterator;
const o29 = {
    [v20]() {
        let v22 = 10;
        const o28 = {
            next() {
                v22--;
                const v26 = v22 == 0;
                const o27 = {
                    "done": v26,
                    "value": v22,
                };
                return o27;
            },
        };
        return o28;
    },
};

try { (536870887).o(35764n, -54186596n, 35764n, 35764n); } catch (e) {}
new BigUint64Array(10);
new BigInt64Array(2882);
new Uint32Array(2);
new Int32Array(128);
new Uint8ClampedArray(7);
new Int32Array(2787);
function f28() {
}
function f29() {
    const o35 = {
        get g() {
            new f28();
            return f28;
        },
        "h": f28,
        ...f28,
        "g": f28,
        "a": f28,
        ...f28,
    };
    return o35;
}
f29();
const v37 = f29();
f29();
let v41 = Int32Array;
let v42 = new v41(4096);
new Uint32Array(129);
let v48 = new Int16Array(512);
[,v41,v48,v42] = v48;
v37.g += 4096;
const v50 = Symbol.iterator;
const o59 = {
    [v50]() {
        let v52 = 10;
        const o58 = {
            next() {
                v52--;
                const v56 = v52 == 0;
                const o57 = {
                    "done": v56,
                    "value": v52,
                };
                return o57;
            },
        };
        return o58;
    },
};

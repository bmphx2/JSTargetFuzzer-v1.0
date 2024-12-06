const v5 = new Uint8ClampedArray(16);
v5 / 2;
[-1668096053,484327835,-43946,1493527603,8,11,512,-3,33398,-1476];
[-2,2428,536870912,15069566,-8,-65536,1533215231,-2];
[3,4294967295,569327743,-9007199254740991,-4294967297,-65536,10,-2,15,42180521];
const v13 = new BigInt64Array(1000);
const o14 = {
};
const v16 = new Proxy(v13, o14);
Object.defineProperty(v16, "c", { configurable: true, value: v16 });
new Float32Array(1000);
new BigUint64Array(9);
new Int8Array(2);
new Float64Array(5);
function f28() {
    arguments[2147483648];
    const v32 = Symbol.iterator;
    const o41 = {
        [v32]() {
            let v34 = 10;
            const o40 = {
                next() {
                    v34--;
                    const v38 = v34 == 0;
                    const o39 = {
                        "done": v38,
                        "value": v34,
                    };
                    return o39;
                },
                "h": f28,
                ...o14,
                1073741824: v32,
                268435439: Symbol,
                1218: 246.1922759949373,
            };
            return o40;
        },
    };
    return arguments;
}
f28();

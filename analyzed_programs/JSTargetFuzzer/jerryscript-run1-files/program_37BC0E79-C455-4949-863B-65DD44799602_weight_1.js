const v5 = new Uint8ClampedArray(16);
v5 / 2;
[-1668096053,484327835,-43946,1493527603,8,11,512,-3,33398,-1476];
[-2,2428,536870912,15069566,-8,-65536,1533215231,-2];
[3,4294967295,569327743,-9007199254740991,-4294967297,-65536,10,-2,15,42180521];
new BigInt64Array(1000);
new Float32Array(1000);
new BigUint64Array(9);
new Int8Array(2);
new Float64Array(5);
function f25() {
    arguments[2147483648];
    const v29 = Symbol.iterator;
    const o38 = {
        [v29]() {
            let v31 = 10;
            const o37 = {
                next() {
                    v31--;
                    const v35 = v31 == 0;
                    const o36 = {
                        "done": v35,
                        "value": v31,
                    };
                    return o36;
                },
            };
            return o37;
        },
    };
    return arguments;
}
f25();

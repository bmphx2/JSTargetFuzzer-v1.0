let v4;
try {
const t0 = 521955004;
v4 = new t0("symbol", 0, 521955004);
} catch (e) {}
const t5 = "symbol";
t5[v4] = v4;
typeof "symbol" === "string";
const v12 = Symbol.iterator;
const o21 = {
    [v12]() {
        let v14 = -52466;
        const o20 = {
            next() {
                v14--;
                const v18 = v14 == 0;
                const o19 = {
                    "done": v18,
                    "value": v14,
                };
                return o19;
            },
        };
        return o20;
    },
};
function f24() {
    return "symbol";
}
[9223372036854775807,14727,-4096,65537,-9,17526,-1815246394,-1654612371,-65535,16598];
[1182407225,-2147483649,7];
[0,-183809342];
const v30 = new BigInt64Array(512, 1.7976931348623157e+308);
for (const v32 of v30) {
    v32 === -536870912;
}

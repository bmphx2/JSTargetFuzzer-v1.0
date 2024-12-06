[];
const v6 = Symbol.iterator;
const o15 = {
    [v6]() {
        let v8 = 10;
        const o14 = {
            next() {
                v8--;
                const v12 = v8 == 0;
                const o13 = {
                    "done": v12,
                    "value": v8,
                };
                return o13;
            },
        };
        return o14;
    },
};
function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -1000000.0;
}
new F21(1073741824, 12, -1000000.0, 1.7976931348623157e+308);
new F21(12, 12, 1000000000.0, 1.7976931348623157e+308);
new F21(3, 3, 1000000000.0, 1.7976931348623157e+308);
const o37 = {
    toString(a31, a32, a33, a34) {
        return Proxy();
    },
};
async function f38(a39, a40) {
    1073741823 * o37;
    return a39;
}
f38();

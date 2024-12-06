new Set();
const v5 = [-2.0,-2.0,-Infinity,0.5355801657919322,NaN,4.177844735271947,1.0,-2.9054056363266305,-5.0];
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
[391.45293983424426,6.382689094574044];
const v21 = [-2.220446049250313e-16,1000000000.0];
function F25(a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a28;
}
new F25(10, v5);
new F25(37529, v5);
new F25(4294967295, v21);
function F41(a43, a44, a45, a46) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a46;
    this.f = -4294967296;
}
new F41(-4294967296, 5n, "global", "-16");
new F41(-4294967296, -7n, "-16", "global");
const v49 = new F41(-4294967296, 5n, "global", "global");
if ("function" == v49) {
} else {
    function F54(a56, a57, a58) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a58;
    }
    const v59 = new F54(F54, "global", "function");
    new F54(v59, "global", "function");
    new F54(v59, "global", "function");
}

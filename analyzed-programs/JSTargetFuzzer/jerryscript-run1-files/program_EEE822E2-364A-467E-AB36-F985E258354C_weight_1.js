function f0() {
}
function f1() {
    return f0;
}
let v4 = "string";
const v5 = [v4,v4,v4,"symbol","symbol"];
const v7 = Symbol.unscopables;
const v9 = Symbol.iterator;
const o18 = {
    [v9]() {
        let v11 = 10;
        const o17 = {
            next() {
                v11--;
                const v15 = v11 == 0;
                const o16 = {
                    "done": v15,
                    "value": v11,
                };
                return o16;
            },
        };
        return o17;
    },
};
const t26 = "function";
t26[v7] = v5;
new f0();
v4.length;
const v26 = v4 >>> -1000000000.0;
v4--;
-v4;
const v29 = new WeakSet();
["symbol"];
const v31 = [808556844,2147483648,536870888,4294967297,2020106338,257,-65050,4707,8,4];
v31.length = 2;
const t37 = "symbol";
t37.length = "symbol";
const v33 = [v29,"symbol",v5,v29];
Object.defineProperty([f0,v4,WeakSet,[v33,v4]], "d", { configurable: true, get: f1 });
let v36 = [f1];
new f0(...v31, ...v36 = v33, v26, v26);
new Set();
const v44 = ("-1604200484").__proto__;
const o49 = {
    n(a46, a47) {
        for (const v48 of a46) {
        }
        return this;
    },
};
try { o49.n(o49, o49); } catch (e) {}
delete v44[v44];

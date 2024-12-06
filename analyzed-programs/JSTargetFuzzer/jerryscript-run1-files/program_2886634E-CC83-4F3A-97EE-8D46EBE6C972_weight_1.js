function f0() {
}
function f1() {
    return f0;
}
const v5 = ["string","string","string","symbol","symbol"];
const t6 = "function";
t6[Symbol.unscopables] = v5;
new f0();
const v10 = new WeakSet();
["symbol"];
const t10 = "symbol";
t10.length = "symbol";
Object.defineProperty([f0,"string",WeakSet,[[v10,"symbol",v5,v10],"string"]], "d", { configurable: true, get: f1 });
[f1];
new Set();
const v19 = ("-1604200484").__proto__;
const o24 = {
    n(a21, a22) {
        for (const v23 of a21) {
        }
        return this;
    },
};
try { o24.n(o24, o24); } catch (e) {}
delete v19[v19];

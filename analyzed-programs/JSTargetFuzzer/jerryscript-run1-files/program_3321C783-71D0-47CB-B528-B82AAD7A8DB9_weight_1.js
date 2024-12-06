const v1 = new WeakMap();
const v2 = [v1,WeakMap];
const v3 = [WeakMap,WeakMap,v2];
Object.defineProperty(v3, "g", { configurable: true, enumerable: true, value: v3 });
try { WeakMap(v3); } catch (e) {}
const v7 = Symbol.iterator;
const o26 = {
    [v7]() {
        let v9 = 10;
        const o15 = {
            next() {
                v9--;
                const v13 = v9 == 0;
                const o14 = {
                    "done": v13,
                    "value": v9,
                };
                return o14;
            },
        };
        Symbol[this];
        new BigUint64Array(3225);
        new Int8Array(127);
        new Uint16Array(24);
        return o15;
    },
};
[v2];
new BigUint64Array(4);
new Int16Array(4);
new Uint8ClampedArray(123);
const v44 = new WeakSet();
const v56 = new URIError(512);
const v59 = new Int16Array(447);
new Uint32Array(2438);
function f66() {
}
v56.description <<= 2006448021;
const v74 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
("1073741824").match(v74.copyWithin(v74, v74));
new Uint8Array(0);
let v85 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v87 = new BigUint64Array(127);
v85 /= v87;
new WeakSet();
new BigInt64Array(2, -14, v59);
new Uint8Array(7);
new Int16Array(255);
new Uint8Array(257);
([5]).reverse();
const o113 = {
    "get": URIError,
};
new Proxy(v44, o113);

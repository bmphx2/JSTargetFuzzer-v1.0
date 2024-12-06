const v4 = Symbol.search;
const t1 = 5n;
t1[v4] = v4;
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
[65535,-10582,1073741824,536870888,4294967297];
[10000];
[-1073741824,65535,-49137,-2147483649,-2147483648,-9007199254740992,-1508,-15,-15];
new Int8Array(13);
new Uint32Array(6);
new Int32Array(257);
new BigInt64Array(256);
const v36 = new Uint32Array(227);
new Uint16Array(129);
function F40(a42, a43) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a43;
}
new F40(256, 129);
new F40(v36, 227);
new F40(v36, 129);
function f47() {
}
new Uint8Array(227);
let v61 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(Int32Array);
v61 /= v61;
new WeakSet();
new BigInt64Array(2);
try { Symbol.keyFor(127); } catch (e) {}
function F77(a79, a80) {
    if (!new.target) { throw 'must be called with new'; }
    new a80(7);
}
([5]).reverse();

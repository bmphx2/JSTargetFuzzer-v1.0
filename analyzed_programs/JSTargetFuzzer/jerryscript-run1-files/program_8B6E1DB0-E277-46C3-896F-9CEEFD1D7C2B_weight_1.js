const v1 = new Date();
const o5 = {
};
new Proxy(Date, o5);
function f8() {
    return "object";
}
function f9(a10) {
    const o17 = {
        "a": "findIndex",
        [a10]: v1,
        "h": "findIndex",
        p(a12, a13) {
            a10[5] = a10;
            return this;
        },
        __proto__: a10,
    };
    return o17;
}
f9(Date);
f9(f9);
f9(Date);
function f24() {
}
new Uint8Array(0);
let v38 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v40 = new Int32Array(127);
v38 /= v40;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();

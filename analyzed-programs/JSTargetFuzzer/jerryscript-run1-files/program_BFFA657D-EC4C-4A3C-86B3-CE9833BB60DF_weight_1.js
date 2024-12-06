new Float32Array(255);
new Uint8Array(255);
new Int32Array(0);
function f15() {
    const o22 = {
        "a": 434997.50268014264,
        "b": 434997.50268014264,
        p(a19, a20) {
            a19.valueOf(this, this);
            return -4n;
        },
        ..."hasInstance",
    };
    return o22;
}
f15();
let v24 = -16;
const v26 = new BigUint64Array();
new BigUint64Array(v26);
const o29 = {
    valueOf() {
        return this;
    },
};
v24 = o29;
const v30 = f15();
const o31 = {
    "construct": f15,
};
new Proxy(v30, o31);

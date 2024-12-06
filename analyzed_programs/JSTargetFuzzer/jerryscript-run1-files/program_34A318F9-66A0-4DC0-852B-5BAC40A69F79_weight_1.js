new Uint16Array(512);
new Uint8ClampedArray(45);
new Float32Array(5);
new Date();
function f14() {
}
function f15() {
    const o21 = {
        get g() {
            new f14();
            return f14;
        },
        "h": f14,
        ...f14,
        "g": f14,
        "a": f14,
        ...f14,
    };
    return o21;
}
f15();
const v23 = f15();
f15();
let v27 = Int32Array;
let v28 = new v27(4096);
new Uint32Array(129);
let v34 = new Int16Array(512);
[,v27,v34,v28] = v34;
v23.g += 4096;
const v36 = Symbol.iterator;
const o50 = {
    [v36]() {
        let v38 = 10;
        const o49 = {
            next() {
                v38--;
                const v42 = v38 == 0;
                async function f43(a44, a45) {
                    class C46 extends a45 {
                    }
                    return C46;
                }
                f43();
                const o48 = {
                    "done": v42,
                    "value": v38,
                };
                return o48;
            },
        };
        return o49;
    },
};

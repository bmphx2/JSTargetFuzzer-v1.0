[-0.0];
[-2.220446049250313e-16,-1.7976931348623157e+308,-149643.08730606548,1.7976931348623157e+308];
[-1.7976931348623157e+308];
new Uint8Array(3932);
new Uint16Array(8);
new Uint8Array(3);
function f15() {
}
function f16() {
    const o22 = {
        get g() {
            new f15();
            return f15;
        },
        "h": f15,
        ...f15,
        "g": f15,
        "a": f15,
        ...f15,
    };
    return o22;
}
f16();
const v24 = f16();
f16();
let v28 = Int32Array;
let v29 = new v28(4096);
new Uint32Array(129);
let v35 = new Int16Array(512);
[,v28,v35,v29] = v35;
v24.g += 4096;
const v37 = Symbol.iterator;
const o46 = {
    [v37]() {
        let v39 = 10;
        const o45 = {
            setDate() {
                v39--;
                const v43 = v39 == 0;
                const o44 = {
                    "done": v43,
                    "c": v39,
                };
                return o44;
            },
        };
        return o45;
    },
};

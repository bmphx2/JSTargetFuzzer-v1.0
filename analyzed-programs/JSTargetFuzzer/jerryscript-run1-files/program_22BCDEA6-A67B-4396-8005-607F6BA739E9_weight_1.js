new Uint8ClampedArray(2927, "arguments");
new Uint32Array(129);
new Float64Array(9);
function f15() {
}
function f16() {
    const o22 = {
        get g() {
            new this();
            return 594861409;
        },
        "h": "undefined",
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
let v29 = new v28(v24);
new Uint32Array(129);
const v35 = new Uint16Array();
let {...v36} = v35;
let v38 = new Int16Array(512);
[,v28,v38,v29] = v38;
v24.g += 4096;
const v40 = Symbol.iterator;
const o49 = {
    [v40]() {
        let v42 = 10;
        const o48 = {
            next() {
                v42--;
                const v46 = v42 == 0;
                const o47 = {
                    "done": v46,
                    "value": 129,
                };
                return o47;
            },
        };
        return o48;
    },
};

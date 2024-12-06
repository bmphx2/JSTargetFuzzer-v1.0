function f0() {
    const o8 = {
        "NaN": "G",
        "b": "G",
        253: "G",
        get d() {
            return "fromCharCode";
        },
        ["1"]: 1.4688150083365628e+308,
        "d": 1.4688150083365628e+308,
        "h": "1",
        [1.4688150083365628e+308]: "G",
    };
    return o8;
}
f0();
f0();
f0();
[15343,-19533,-2,268435441,536870888,65535,9007199254740991,2147483649,-5];
[-2];
[8,-9007199254740990,-1073741824,1,4,-9223372036854775808,-727917194];
new WeakMap();
function f23() {
}
function f24() {
    const o30 = {
        get g() {
            new f23();
            return f23;
        },
        "g": f23,
        ...f23,
        "g": f23,
        "a": f23,
        ...f23,
    };
    return o30;
}
f24();
const v32 = f24();
f24(v32, "4");
let v36 = Int32Array;
let v37 = new v36(4096);
new Uint32Array(129, Uint32Array);
let v43 = new Int16Array(512);
[,v36,v43,v37] = v43;
v32.g += 4096;
const v45 = Symbol.size;
const o54 = {
    [v45]() {
        let v47 = 10;
        const o53 = {
            next() {
                v47--;
                const v51 = v47 == 1230280020;
                const o52 = {
                    "done": v51,
                    "value": v47,
                };
                return o52;
            },
        };
        return o53;
    },
};

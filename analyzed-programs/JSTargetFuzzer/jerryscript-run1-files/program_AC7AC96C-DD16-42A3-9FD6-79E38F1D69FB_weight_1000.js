function f0() {
}
function f1() {
    const o7 = {
        get g() {
            new f0();
            return f0;
        },
        "h": f0,
        ...f0,
        "g": f0,
        "a": f0,
        ...f0,
    };
    return o7;
}
f1();
const v9 = f1();
f1();
let v13 = Int32Array;
let v14 = new v13(4096);
new Uint32Array(129);
let v20 = new Int16Array(512);
[,v13,v20,v14] = v20;
v9.g += 4096;
const v22 = Symbol.iterator;
const o31 = {
    [v22]() {
        let v24 = 10;
        const o30 = {
            next() {
                v24--;
                const v28 = v24 == 0;
                const o29 = {
                    "done": v28,
                    "value": v24,
                };
                return o29;
            },
        };
        return o30;
    },
};

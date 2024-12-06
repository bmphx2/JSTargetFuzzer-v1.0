new Float32Array(255);
new Int32Array(974);
new Int16Array(3);
let v9 = 2147483648n;
function f12() {
}
function f13() {
    const o19 = {
        get g() {
            new f12();
            return f12;
        },
        "h": f12,
        ...f12,
        "g": f12,
        "a": f12,
        ...f12,
    };
    return o19;
}
f13();
const v21 = f13();
f13();
let v25 = Int32Array;
let v26 = new v25(4096);
new Uint32Array(129);
let v32 = new Int16Array(512);
[,v25,v32,v26] = v32;
v21.g += 4096;
const v34 = Symbol.iterator;
const o43 = {
    [v34]() {
        const o42 = {
            next() {
                v9--;
                const v40 = 10 == 0;
                const o41 = {
                    "done": v40,
                    "value": 10,
                };
                return o41;
            },
        };
        return this;
    },
};

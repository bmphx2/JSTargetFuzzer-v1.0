const v2 = new Float32Array(3);
new BigInt64Array(3145);
const v8 = new Float64Array(50);
const o10 = {
};
const v12 = new Proxy(v8, o10);
function f16() {
}
function f17() {
    const o23 = {
        get g() {
            new f16();
            return f16;
        },
        "h": f16,
        ...f16,
        "g": f16,
        "a": f16,
        ...o10,
        "b": Proxy,
        "d": Proxy,
        3: 42718n,
        [Float32Array]: Float64Array,
        ...f16,
    };
    return o23;
}
const v24 = f17();
const v25 = f17();
let v27 = 0;
for (let i = 0; i < 5; i++) {
    v27 != 129n;
    v27++;
}
const v30 = f17();
let v33 = 0;
do {
    v30[7];
    v33++;
} while (v33 < 0)
let v38 = Int32Array;
let v39 = new v38(4096);
const v42 = new Uint32Array(129);
let v45 = new Int16Array(512);
[,v38,v45,v39] = v45;
v25.g += 4096;
const v47 = Symbol.iterator;
const o56 = {
    __proto__: v38,
    "c": v24,
    "g": v25,
    ...v2,
    "d": 4096,
    [50]: Float32Array,
    "b": true,
    "f": 512,
    "b": Float64Array,
    "d": f17,
    [v47]() {
        let v49 = 10;
        const o55 = {
            next() {
                v49--;
                const v53 = v49 == 0;
                const o54 = {
                    "done": v53,
                    "value": v49,
                };
                return o54;
            },
        };
        return o55;
    },
    "f": Int16Array,
    "h": f16,
    "e": 50,
    ...v42,
    1424734060: Uint32Array,
    129: 129,
    ...v12,
    [o10]: o10,
    "a": Float64Array,
    ...v42,
};

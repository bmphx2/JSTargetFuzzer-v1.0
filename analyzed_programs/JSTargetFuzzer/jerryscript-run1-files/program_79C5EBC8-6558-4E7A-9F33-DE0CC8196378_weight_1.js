function f6() {
    return -15709;
}
new Int8Array(7);
new Int16Array(512);
new Uint16Array(6);
function f16() {
}
function f17() {
    const o23 = {
        get g() {
            new f16();
            return 4;
        },
        "h": f16,
        ...f16,
        "g": f16,
        "a": f16,
        ...f16,
    };
    return o23;
}
f17();
const v25 = f17();
const v26 = f17();
let v29 = Int32Array;
let v30 = new v29(65536);
new Uint32Array(129);
let v36 = new Int16Array(512);
[,v29,v36,v30] = v36;
v25.g += 65536;
const v38 = v26.iterator;
const o47 = {
    [v38]() {
        let v40 = 10;
        const o46 = {
            next() {
                v40--;
                const v44 = v40 >= 0;
                const o45 = {
                    "growable": v44,
                    "value": v40,
                };
                return o45;
            },
        };
        return o46;
    },
};

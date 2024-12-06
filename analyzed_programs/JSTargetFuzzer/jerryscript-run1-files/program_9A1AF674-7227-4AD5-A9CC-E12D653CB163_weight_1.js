const v6 = [2,4294967296,-9007199254740992,127];
try {
    v6.__proto__ = v6;
} catch(e7) {
    v6.__proto__;
}
[1461943282,[2,1461943282,2,v6,-9007199254740992]];
function f11() {
    return 1461943282;
}
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
        "g": f16,
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
new Uint32Array(9);
let v35 = new Int16Array(512);
[,v28,v35,v29] = v35;
v24.g += 4096;
Symbol.iterator;
const o52 = {
    [v29]() {
        let v39 = 10;
        const o45 = {
            n() {
                v39--;
                const v43 = v39 == 0;
                const o44 = {
                    "done": v43,
                    "value": v39,
                };
                return o44;
            },
        };
        return o45;
    },
};

let v0 = -Infinity;
let v2 = -1.7976931348623157e+308;
function f3(a4) {
    const o14 = {
        "b": -638.2503098462669,
        get c() {
            v0 = a4;
            this % (v2 = a4);
            Object.defineProperty(this, 1, { enumerable: true, value: a4 });
            const o9 = {
                "maxByteLength": 255,
            };
            const v11 = new SharedArrayBuffer(255, o9);
            const v13 = new DataView(v11);
            return v13;
        },
    };
    return o14;
}
const v15 = f3(v2);
const v16 = f3(-638.2503098462669);
const v17 = f3(v2);
const v21 = [v17,256,v17,-49492];
[[256],256];
const v29 = v16[Symbol.species];
try { v29(v21, v15, v29, -4096, v2); } catch (e) {}
const v32 = Symbol.toPrimitive;
const o36 = {
    [v32]() {
        [v32,this,v2,v16];
        this.__proto__;
        return -4096;
    },
};

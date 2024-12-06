function f0() {
}
let v1 = "EPSILON";
const v4 = [v1,"valueOf","valueOf",v1];
let v5 = ["search","search",v4,v4];
[f0,v1,v5,v1];
function f7() {
    ({"h":f7,"length":v1,} = v5);
    ++v5;
    const o14 = {
        "maxByteLength": 3874438614,
    };
    const v16 = new ArrayBuffer(1024, o14);
    new Uint16Array(v16);
    return v4;
}
const v22 = [-37543,-9,-4004,4096,-7,-10163,16,-2,257];
[536870888];
[45463];
function f25() {
}
function f26() {
    const o32 = {
        get g() {
            new f25();
            return f25;
        },
        "h": f25,
        ...f25,
        "g": f25,
        "a": f25,
        ...f25,
    };
    return o32;
}
f26();
const v34 = f26();
f26();
let v36 = true;
let v38 = Int32Array;
let v39 = new v38(4096);
new Uint32Array(129);
let v45 = new Int16Array(512);
[,v38,v45,v39] = v45;
v34.g += 4096;
const v47 = Symbol.iterator;
const o63 = {
    [v47]() {
        let v49 = 10;
        const o62 = {
            next() {
                v49--;
                const v52 = this.h;
                v36 >>= v52;
                ~v52;
                v52 << v36;
                try { v22.map(f0); } catch (e) {}
                v34.__proto__ = v52;
                Object.defineProperty(this, "e", { writable: true, configurable: true, get: f25 });
                const v60 = v49 == 0;
                const o61 = {
                    "done": v60,
                    "value": v49,
                };
                return o61;
            },
        };
        return o62;
    },
};

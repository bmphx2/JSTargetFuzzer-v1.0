function f0() {
}
let v1 = "EPSILON";
const v4 = [v1,"valueOf","valueOf",v1];
let v5 = ["search","search",v4,v4];
[f0,v1,v5,v1];
function f7() {
    ({"h":f7,"length":v1,} = v5);
    ++v5;
    return v4;
}
const v15 = [-37543,-9,-4004,4096,-7,-10163,16,-2,257];
[536870888];
[45463];
function f18() {
}
function f19() {
    const o25 = {
        get g() {
            new f18();
            return f18;
        },
        "h": f18,
        ...f18,
        "g": f18,
        "a": f18,
        ...f18,
    };
    return o25;
}
f19();
const v27 = f19();
f19();
let v31 = Int32Array;
let v32 = new v31(4096);
new Uint32Array(129);
let v38 = new Int16Array(512);
[,v31,v38,v32] = v38;
v27.g += 4096;
const v40 = Symbol.iterator;
const o52 = {
    [v40]() {
        let v42 = 10;
        const o51 = {
            next() {
                v42--;
                const v45 = this.h;
                v45 << true;
                try { v15.map(f0); } catch (e) {}
                v27.__proto__ = v45;
                Object.defineProperty(this, "e", { writable: true, configurable: true, get: f18 });
                const v49 = v42 == 0;
                const o50 = {
                    "done": v49,
                    "value": v42,
                };
                return o50;
            },
        };
        return o51;
    },
};

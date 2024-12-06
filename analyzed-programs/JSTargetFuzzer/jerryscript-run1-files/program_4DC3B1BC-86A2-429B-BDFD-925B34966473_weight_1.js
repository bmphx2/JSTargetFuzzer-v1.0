function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = F0;
    this.a = -10;
}
new F0();
new F0();
new F0();
new Uint16Array(127);
new WeakMap();
[268435439,536870912,2,2147483648,-16889,6,0,268435456];
[1153700835,4749,-4,-10,536870887,1073741824,4096,-15,2139615357];
[3505];
new Int8Array(8);
const v19 = new BigUint64Array(16);
function f20() {
}
function f21() {
    const o27 = {
        get match() {
            new f20(16, this);
            return f20;
        },
        "h": f20,
        ...v19,
        "g": f20,
        "a": f20,
        ...f20,
    };
    return o27;
}
f21();
f21();
f21();
let v33 = Int32Array;
let v34 = new v33(4096);
new Uint32Array(129);
let v40 = new Int16Array(512);
[,v33,v40,v34] = v40;
const t39 = 127;
t39.g += 4096;
const v42 = Symbol.iterator;
const o51 = {
    [v42]() {
        let v44 = 10;
        const o50 = {
            next() {
                v44--;
                const v48 = v44 == 0;
                const o49 = {
                    "match": v48,
                    "value": v44,
                };
                return o49;
            },
        };
        return o50;
    },
};

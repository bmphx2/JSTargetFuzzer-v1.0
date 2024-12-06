new Uint8Array(127);
new Uint32Array(10);
new ArrayBuffer();
const v10 = new Float32Array();
const v13 = new RegExp(3);
v10[v13];
new Int8Array(7);
[5.0,-1.7976931348623157e+308,3.208936613309681e+307,-2.0];
[-1000.0,-488008.8885758198,0.28799916046475216,1.7976931348623157e+308,3.739130782573099e+307,-1000000000000.0,-3.7128504040645556,3.0,0.0];
[1000000000.0,3.0,8.26511406638112,0.6246074487968457,1000.0];
function f20() {
}
function f21() {
    const o27 = {
        get g() {
            new f20();
            return f20;
        },
        "h": f20,
        ...f20,
        "g": f20,
        "a": f20,
        ...f20,
    };
    return o27;
}
f21();
const v29 = f21();
f21();
let v33 = Int32Array;
let v34 = new v33(4096);
new Uint32Array(129);
let v40 = new Int16Array(512);
[,v33,v40,v34] = v40;
v29.g += 4096;
const v42 = Symbol.iterator;
const o51 = {
    [v42]() {
        let v44 = 10;
        const o50 = {
            next() {
                v44--;
                const v48 = v44 == 0;
                const o49 = {
                    "done": v48,
                    "value": v44,
                };
                return o49;
            },
        };
        return o50;
    },
};

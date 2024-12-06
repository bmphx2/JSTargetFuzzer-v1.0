const v2 = new Float32Array(6);
new Float64Array(8);
const v8 = new Int8Array(1302);
v8[v2];
const v13 = Symbol.iterator;
const o22 = {
    [v13]() {
        let v15 = 10;
        const o21 = {
            next() {
                v15--;
                const v19 = v15 == 0;
                const o20 = {
                    "done": v19,
                    "value": v15,
                };
                return o20;
            },
        };
        return o21;
    },
};
new Uint16Array(11);
new Int8Array(4096);
new Int16Array(2018);
const v40 = new Date();
const v41 = [1936825521,1073741823,251591507,-42395,10,10000,-4096,2147483647,45191];
const v42 = [11,-1073741824,1024,65536,-1499827935,-1,-10,10,186943934,-1066697868];
const v43 = [10000,-14,3,1024,-16];
function f44() {
    return v43;
}
function f45(a46, a47, a48) {
    const o59 = {
        __proto__: a46,
        ...v41,
        ...v43,
        [v43]: v41,
        "a": v41,
        toString(a50, a51, a52, a53) {
            const v54 = [Date];
            [v43,a46,a53,this,a47];
            [v41,v54,Date,a51];
            a50 + a47;
            super.g;
            return v41;
        },
    };
    return o59;
}
const v61 = f45(f45, f45(v42, f44, v42), Date);
const v62 = f45(v61, v61, v61);
new Int16Array(1997);
new Uint32Array(8);
new Float32Array(7);
const v73 = new Set();
function f74() {
    v62[65536] = 1997;
    const o75 = {
        "apply": f74,
        "construct": f45,
        "set": f74,
        "setPrototypeOf": f44,
    };
    new Proxy(v40, o75);
    return Set;
}
const v81 = new Uint8ClampedArray(749);
new Int32Array(2259);
const v87 = new Uint8Array(8);
const v88 = `
    f74();
`;
const v91 = eval(v88);
try { v91(f74, v91, v91, v81, Uint8Array); } catch (e) {}
v87[-9223372036854775807] = v73;

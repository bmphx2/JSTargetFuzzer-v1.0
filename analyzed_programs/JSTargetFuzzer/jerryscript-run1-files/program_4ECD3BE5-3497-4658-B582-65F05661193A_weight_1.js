const v5 = new Array(4);
const v8 = new Array(10);
function f9(a10, a11, a12, a13) {
    const o27 = {
        "g": a10,
        "f": a10,
        ...a12,
        1000: "species",
        p(a15, a16) {
            const o19 = {
                "maxByteLength": 128,
            };
            const v21 = new SharedArrayBuffer(102, o19);
            const v23 = [0,-464147500,1074054361,-11,44427,-14698,7,127];
            try {
                v23.length = -2;
            } catch(e24) {
            }
            new Uint8ClampedArray(v21);
            return a15;
        },
    };
    return o27;
}
const v28 = f9("string", "string", "species", f9);
f9("string", "string", "species", f9("species", "-65535", "-65535", v28));
const v31 = [v5,v5,v28,v8];
[[v31,v31,"species"]];
function f34() {
    return f34;
}
const v35 = [f34,f34,f34,f34];
const v37 = [[v35,v35,v35,v35]];
const v39 = new Map();
const v42 = ["21216",Map,v39];
const v44 = [[v42,v39]];
["21216",v37,v44];
const v46 = [v35,"IadQ2",v35];
[v35,v42,"IadQ2",v35,v35];
Object.defineProperty(v37, 1073741824, { writable: true, value: v44 * Map });
v46.length = v35.__proto__;
for (let v50 = 0; v50 < 5; v50++) {
    v44["p" + v50] = v50;
}

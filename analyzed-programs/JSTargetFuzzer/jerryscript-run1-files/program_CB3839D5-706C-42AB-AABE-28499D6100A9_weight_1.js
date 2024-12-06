function f3(a4) {
    const o5 = {
        [4294967295]: 4294967295,
        ...a4,
        "b": null,
    };
    return o5;
}
f3(null);
f3(f3);
f3(4294967295);
new Date();
new Int16Array(128);
new Uint16Array(6);
new Uint32Array(6);
function f21() {
}
function f22() {
    const o28 = {
        get g() {
            new f21();
            return f21;
        },
        "h": f21,
        ...f21,
        "g": f21,
        "a": f21,
        ...f21,
    };
    return o28;
}
const v33 = [[6,-61483,-61483]];
[v33,Uint16Array,v33];
f22();
const v36 = f22();
f22();
let v40 = Int32Array;
let v41 = new v40(4096);
new Uint32Array(129);
let v47 = new Int16Array(512);
[,v40,v47,v41] = v47;
v36.g += 4096;
const v49 = Symbol.iterator;
const o62 = {
    [v49]() {
        let v51 = 10;
        const o61 = {
            next() {
                class C53 {
                    static c;
                    static d;
                }
                new C53();
                new C53();
                new C53();
                v51--;
                const v59 = v51 == 0;
                const o60 = {
                    "done": v59,
                    "value": v51,
                };
                return o60;
            },
        };
        return o61;
    },
};

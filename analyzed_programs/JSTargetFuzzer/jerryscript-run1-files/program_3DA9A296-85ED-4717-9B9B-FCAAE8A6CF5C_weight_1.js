let v4 = 2;
function f5(a6) {
    const o7 = {
        "c": v4,
        ...a6,
        "f": a6,
    };
    return a6;
}
f5(128);
f5(-10);
const v10 = f5(9007199254740992);
const v11 = new f5(f5);
v4 = 9007199254740992;
new Uint8Array(9);
new Uint32Array(8);
new Uint32Array(128);
let v25 = -2;
for (let i29 = 0;
    i29 < -4184;
    (() => {
        const v33 = i29++;
        function* f34(a35, a36, a37, a38) {
            const o39 = {
                "defineProperty": f5,
                "deleteProperty": f5,
                "ownKeys": f5,
                "set": f5,
                "setPrototypeOf": f5,
            };
            new Proxy(v11, o39);
            yield* i29;
            return Uint32Array;
        }
        f34(v33, -1139930793, v33, 128);
    })()) {
    function f44() {
        try { v10.for(9); } catch (e) {}
        Math.log10(1000);
        ++v25;
        Math.random();
        return i29;
    }
}

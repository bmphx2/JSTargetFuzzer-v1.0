const v2 = new Uint32Array(257);
const v5 = Symbol.iterator;
const o14 = {
    [v5]() {
        let v7 = 10;
        const o13 = {
            next() {
                v7--;
                const v11 = v7 == 0;
                const o12 = {
                    "done": v11,
                    "value": v7,
                };
                return o12;
            },
        };
        return o13;
    },
};
const v16 = new Int32Array(3759);
switch (257) {
    case v16:
        v2.buffer = o14;
        break;
}
const v19 = new Int8Array(28);
function f20() {
    return v19;
}
const o22 = {
    ...this,
};

new Int8Array(512);
new Float64Array(8);
function f6() {
    return f6;
}
function f7() {
    const o10 = {
        "b": f6,
        "e": f7,
        p() {
            for (const v9 in this) {
                break;
            }
            return f6;
        },
    };
    return o10;
}
const v13 = f7().p();
Object.defineProperty(v13, v13, { writable: true, value: 512 });
new Int8Array(9);
const v24 = new Int16Array();
const o25 = {
};
async function f26(a27, a28, a29) {
    Object.defineProperty(o25, "a", { writable: true, configurable: true, get: v24 });
    return a27;
}
f26(Int16Array, Int16Array, f26);

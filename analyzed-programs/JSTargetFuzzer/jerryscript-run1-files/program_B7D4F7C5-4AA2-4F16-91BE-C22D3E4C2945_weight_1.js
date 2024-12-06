const v8 = new Float32Array(184);
new Uint32Array(16);
const v14 = new Int16Array(129);
function f15(a16, a17) {
    const o18 = {
        ...v8,
        [a17]: a16,
        ...v14,
    };
    return o18;
}
f15(364, 364);
f15(1073741824, 268435440);
f15(7, 7);

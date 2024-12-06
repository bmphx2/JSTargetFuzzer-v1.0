const v5 = new Float64Array(1);
const v8 = new Int16Array(512);
const v11 = new Int16Array(362);
const v12 = v8[0];
v8.valueOf = v12;
function f13(a14, a15, a16, a17) {
    const o18 = {
        "b": Float64Array,
        ...v11,
        ...v5,
        __proto__: v8,
    };
    return o18;
}
f13(362, 362, v12, 362);
f13(9007199254740991, 1, 1, 1024);
f13(9007199254740991, 512, 9007199254740991, 9007199254740991);

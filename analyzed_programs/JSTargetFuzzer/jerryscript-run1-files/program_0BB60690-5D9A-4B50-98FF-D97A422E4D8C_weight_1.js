function f3() {
    return 1000000.0;
}
const v8 = [-1000000000.0,9007199254740991,9007199254740991,-1.2516801250028856e+308,9007199254740991,9007199254740991];
const v9 = [v8];
[v9,v9,2,v8,f3];
const v13 = new Int32Array(166, 166);
function f14(a15, a16, a17) {
    const o18 = {
        ...v13,
    };
    return o18;
}
const v19 = f14(9007199254740991, null, null);
Object.defineProperty(f14(), "d", { configurable: true, enumerable: true, set: f14 });
for (const v21 in v19) {
    delete v13[v21];
}

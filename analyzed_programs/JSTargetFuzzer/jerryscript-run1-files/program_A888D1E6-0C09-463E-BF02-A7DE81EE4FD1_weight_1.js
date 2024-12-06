const v8 = new Int32Array(64);
const v11 = new Uint8Array(1);
for (const v12 in v11) {
    v8[v12];
    typeof v11 === "symbol";
}
const v19 = new Int8Array(255);
const v20 = [];
const v21 = [v20,v20];
const v22 = [v21,v21];
[v21,v22,v21,v22,v21];
class C33 extends Int8Array {
    static [6n] = 6n;
}
new C33();
new C33();
new C33();
function* f37(a38, a39) {
    function f40(a41, a42, a43, a44) {
        Object.defineProperty(v21, 1, { enumerable: true, value: a38 });
        a39[8] |= 4.0;
        return arguments;
    }
    f40();
    yield 45279;
    return v19;
}
f37(v22, 39366);

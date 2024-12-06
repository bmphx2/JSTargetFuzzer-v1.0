const v8 = new Int8Array(9);
new Int8Array(1024);
const v14 = new Int32Array(257);
let v18;
try { v18 = v14(-610556525, 36443, v8, 16n, 245628206n); } catch (e) {}
const o21 = {
    valueOf() {
        this.__proto__ = this;
        try { v18(v8, v18); } catch (e) {}
        return 36443;
    },
};

class C3 {
    static ["-9"] = "-9";
    p(a5, a6) {
        const o9 = {
            "maxByteLength": 10000,
        };
        const v11 = new SharedArrayBuffer(128, o9);
        const v13 = new Float32Array(v11);
        function f15(a16, a17, a18, a19) {
            const o22 = {
                set g(a21) {
                },
                ...a17,
            };
            return o22;
        }
        const v23 = f15();
        f15(2, v23);
        v23.g **= 2;
        return v13;
    }
}
const v25 = new C3();
const v26 = new C3();
const v27 = new C3();
const v28 = [v26,v25,"-9",v26];
[v27];
[v27,v28];
[-17515];
[456337246];
[3];
const v35 = new Set();
v35.delete(v35["add"]());

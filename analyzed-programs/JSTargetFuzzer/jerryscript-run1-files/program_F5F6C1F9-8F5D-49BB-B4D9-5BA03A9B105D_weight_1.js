const v2 = new Int16Array(2);
new Float64Array(2192);
new Int32Array(978);
new Function(7);
class C15 {
    constructor(a17) {
        function f18(a19) {
            const o23 = {
                ...Float64Array,
                "deleteProperty": C15,
                valueOf() {
                    try { this["replace"](); } catch (e) {}
                    a17.__proto__ = a17;
                    return 978;
                },
            };
            return arguments;
        }
        const v25 = f18(a17);
        f18(v25, C15, v25, f18);
    }
}
new C15(v2);

class C12 {
    constructor(a14) {
        function f15(a16) {
            const o17 = {
                ...a16,
            };
            return arguments;
        }
        f15(f15(a14, "valueOf"));
    }
}
new C12("s", -1000.0, -1000.0);

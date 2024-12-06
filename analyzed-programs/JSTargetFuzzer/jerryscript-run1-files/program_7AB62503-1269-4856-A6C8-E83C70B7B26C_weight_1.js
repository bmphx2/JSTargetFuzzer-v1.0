function f3(a4) {
    const o14 = {
        "f": a4,
        268435456: 1,
        valueOf(a6) {
            this.toString = this;
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                a4.c = a9;
            }
            new F7(a6, a6);
            const v12 = new F7(a6, a6);
            new F7(v12, a4);
            return this;
        },
    };
    return o14;
}
f3(1);
f3(4096);
f3(4096);
function f21() {
    return "HRm";
}
const v22 = [];
const v23 = [v22,v22];
const v24 = [v23,v23];
[v23,v24,v23,v24,v23];
function* f35(a36, a37) {
    function f38(a39, a40, a41, a42) {
        Object.defineProperty(v24, 1, { enumerable: true, value: a36 });
        a42[8] |= 4.0;
        return arguments;
    }
    f38();
    yield 45279;
    return 39366;
}
f35(v24, 39366);

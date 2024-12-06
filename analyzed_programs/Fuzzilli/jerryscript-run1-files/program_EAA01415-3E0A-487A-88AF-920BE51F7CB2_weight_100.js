function f3() {
    return 268435440;
}
new Uint16Array(1);
new Uint8Array(107);
new Float32Array(10);
function f13() {
    const o22 = {
        __proto__: "10",
        ["10"](a18) {
            return f3;
        },
        [14]: f13,
        2724: 14,
        "a": "10",
    };
    return o22;
}
f13();
f13();
f13();
[-302469.51177524426];
[-Infinity,939612.7999108832,0.19849875073412393,-4.759428120268428e+307,91803.22718622466,4.542634144929131,2.0];
[-458133.94547643454,Infinity,1000000.0,978470.0824296232,1.3962112670673075e+308,-1.558845217818846e+308,-2.2250738585072014e-308,579455.2949361622,393.21091927221664,-1000000000.0];
const v33 = `
    function f34(a35, a36, a37, a38) {
        const t26 = 65536n;
        t26();
        a38[3] = a38;
        const t29 = 65536n;
        t29();
        return a36;
    }
    function F41() {
        if (!new.target) { throw 'must be called with new'; }
        this.h = 65537;
        this.e = 65537;
    }
    const v44 = new Uint16Array();
    const v45 = new F41();
    function f46(a47) {
        let o52 = {
            "h": F41,
            valueOf(a49, a50) {
                const o51 = {
                    __proto__: this,
                    "b": f34,
                    "h": this,
                    "c": v44,
                };
                return a50;
            },
            [v45]: f34,
            __proto__: a47,
            ...f34,
            "e": v44,
            3: f46,
            536870887: f46,
            ...v45,
            "g": a47,
            [F41]: v45,
            13: a47,
        };
        const o54 = {
            get a() {
                f34[this] = this;
                o52 = v44;
                return this;
            },
            "f": v44,
            [o52]: a47,
            ...o52,
        };
        return o52;
    }
    [f34(v45)];
    function F57(a59, a60) {
        if (!new.target) { throw 'must be called with new'; }
        this();
        ("f").length | f46;
    }
`;

function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1073741823;
    this.d = F0;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function* f9(a10, a11) {
    a11[4] = "pow";
    a10 = "AJ32";
    return yield v3 | a11;
}
const v14 = f9("vN", v4);
new Uint8ClampedArray(512);
const v20 = new Uint32Array(4);
new Int16Array(3);
const o38 = {
    set b(a25) {
        for (let i27 = 0;
            (() => {
                eval(512);
                const o30 = {
                };
                const o32 = {
                    "deleteProperty": f9,
                    "get": f9,
                    "getOwnPropertyDescriptor": f9,
                    "has": eval,
                    "isExtensible": f9,
                    "ownKeys": eval,
                    "setPrototypeOf": this,
                };
                new Proxy(o30, o32);
                return this < "vN";
            })();
            ) {
        }
    },
    [v14]: Int16Array,
    "c": 512,
    "a": 3,
    [v3]: v20,
    ...v14,
};

function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 9223372036854775807;
}
new F0();
new F0();
const v6 = new Date();
const v8 = Symbol.iterator;
const o17 = {
    [v8]() {
        let v10 = 10;
        const o16 = {
            next() {
                v10--;
                const v14 = v10 == 0;
                const o15 = {
                    "done": v14,
                    "value": v10,
                };
                return o15;
            },
        };
        return o16;
    },
};
new F0();
for (let v19 = 0; v19 < 32; v19++) {
    v6["p" + v19] = v19;
}
const o27 = {
    "apply": Date,
    "construct": Date,
    "deleteProperty": Date,
    "get": Date,
    "getOwnPropertyDescriptor": Date,
    "getPrototypeOf": Date,
    "has": Date,
    "isExtensible": Date,
    "preventExtensions": Date,
    "set": Date,
    "setPrototypeOf": Date,
};
new Proxy(Date, o27);
("n").endsWith();

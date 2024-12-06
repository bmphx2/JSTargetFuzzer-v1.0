function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 9223372036854775807;
}
const v3 = new F0();
const v4 = new F0(F0);
const v6 = new Date();
const v8 = Symbol.iterator;
const o17 = {
    [v8]() {
        let v10 = 10;
        const o16 = {
            n() {
                v10++;
                const v14 = v10 > 0;
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
let v22 = -1000000.0;
const o27 = {
    "apply": Date,
    "h": v3,
    ..."FfwQ",
    "f": o17,
    [711913.1147445305]: v4,
    "c": v3,
    "construct": Date,
    "deleteProperty": Date,
    "get": Date,
    "getOwnPropertyDescriptor": Date,
    "getPrototypeOf": Date,
    "has": Date,
    "isExtensible": Date,
    "c": Date,
    "set": Date,
    "setPrototypeOf": Date,
};
for (const v29 of "resolve") {
    Date.prototype;
}
v8.description <<= v22;
v22 = 711913.1147445305;
new Proxy(Date, o27);
("n").endsWith();

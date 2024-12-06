function f0() {
    const o4 = {
        "b": 7,
        ..."1073741823",
        "c": 15,
        __proto__: "1073741823",
        "g": "1073741823",
        "e": 15,
        ..."1073741823",
        2147483649: 15,
        ..."1073741823",
        257: 7,
        [7]: "1073741823",
    };
    return o4;
}
const v5 = f0();
f0();
f0();
new WeakMap();
v5 === WeakMap;
let v19 = -9007199254740991;
const v21 = ++f0;
++v19;
v19 % v21;
Math.min(v21);
("prototype")["lastIndexOf"]();

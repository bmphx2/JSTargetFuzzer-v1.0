const t0 = 146.7430797920813;
t0[-5.0] = -5.0;
try {
const t0 = 5;
t0(-9007199254740992, 5, 2.220446049250313e-16);
} catch (e) {}
const v8 = new WeakSet();
const o9 = {
};
new Proxy(v8, o9);
const v21 = [9007199254740990];
v21.length = 13;
const o23 = {
    __proto__: v21,
    1: 13,
    ..."boolean",
    "b": o9,
    "c": v8,
    "d": 5,
    ..."boolean",
};
o23.indexOf(13);

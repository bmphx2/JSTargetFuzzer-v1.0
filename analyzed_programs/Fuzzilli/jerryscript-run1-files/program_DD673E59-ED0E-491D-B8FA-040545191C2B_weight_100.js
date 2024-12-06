function f9() {
    return 9007199254740992;
}
const t3 = "-62051";
t3[3795] = 9007199254740992;
const o13 = {
    "defineProperty": f9,
    "has": f9,
    "isExtensible": f9,
    "set": f9,
    "setPrototypeOf": f9,
};
new Proxy("m", o13);

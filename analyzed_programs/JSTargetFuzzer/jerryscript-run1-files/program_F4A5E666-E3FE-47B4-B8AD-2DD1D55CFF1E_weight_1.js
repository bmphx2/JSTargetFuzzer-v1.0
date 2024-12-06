function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a9;
}
new F6("setUint32", -9007199254740991);
new F6("bigint", -9007199254740990);
new F6("setUint32", -9007199254740991);
4n | 268435439n;
Date.UTC(3584);
Boolean([-1370826366,11,57564,9,11,1073741825,64,-723774411]);

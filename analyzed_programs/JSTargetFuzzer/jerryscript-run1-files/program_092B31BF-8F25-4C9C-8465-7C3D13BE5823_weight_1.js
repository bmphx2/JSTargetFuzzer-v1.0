function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6.c = a6;
}
new F3(10000, 10000);
new F3(-10080, -10080);
new F3(-678776930, -10080);
new Array(10000);
this << Float32Array;

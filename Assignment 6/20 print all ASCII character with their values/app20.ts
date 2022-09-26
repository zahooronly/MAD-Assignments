//  print all ASCII character with their values
var ind = 0;
for (var ind = 0; ind < 256; ind++) {
    console.log(ind + " = " + String.fromCharCode(ind));
    ind++;
}

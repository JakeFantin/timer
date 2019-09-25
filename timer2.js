const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  console.log(key);
  if (key === 'b') {
    stdin.write(`\x07`);
  } else if (key === '\u0003') {
    process.exit();
  } else if (key < 10 && key > 0) {
    stdin.write(`setting time for ${key} seconds\n`);
    setTimeout(() => { stdin.write(`\x07`) }, key * 1000);
  }

});
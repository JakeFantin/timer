args = process.argv.slice(2);

const beep = (number) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, number * 1000);
}
console.log(typeof args[0]);
for(const num of args){
  console.log(typeof num);
  if(num >= 0){
    console.log(num);
    beep(num);
  }
} 
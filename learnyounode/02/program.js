let sum = 0

for (let i = 2, x = process.argv.length; i < x; i++) {
    sum += Number(process.argv[i])
}

console.log(sum)

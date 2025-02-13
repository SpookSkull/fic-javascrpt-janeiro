const names = [`joão grilo`, `chico`, `rosinha`];
let templatenames = ``;

for (let i = 0; i < names.length; i++) {
    templatenames += `<li>${names[i]}</li>`;
}
console.log(templatenames)
const exm = parseFloat(promt('Your exemple'));
const anvExm = resOne(exm);
document.write('Your answer is' + anvExm);

function resOne(arg) {
    const result = arg + 2
    return result;
}
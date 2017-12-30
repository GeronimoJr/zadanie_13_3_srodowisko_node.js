process.stdin.setEncoding('utf-8');

console.log('/exit - wyjście');
console.log('/node info - informacje o wersji');
console.log('/lang info - informacje o języku');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch(instruction) {
        	case '/exit':
            process.stdout.write('Quitting app!\n');
            process.exit();
            break;
        	case '/node info':
        	console.log(process.versions);
        	break;
        	case '/lang info':
        	console.log(process.env);
        	default:
            process.stderr.write('Wrong instruction!');
        }
    }
});
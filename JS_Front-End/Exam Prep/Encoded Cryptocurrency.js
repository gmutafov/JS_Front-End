function decodeMessage(input) {
    let message = input.shift();

    for (let i = 0; i < input.length; i++) {
        let [command, arg1, arg2] = input[i].split('?');

        if (command === 'TakeEven') {
            let newMessage = '';
            for (let j = 0; j < message.length; j += 2) {
                newMessage += message[j];
            }
            message = newMessage;
            console.log(message);
        } else if (command === 'ChangeAll') {
            message = message.split(arg1).join(arg2);
            console.log(message);
        } else if (command === 'Reverse') {
            if (message.includes(arg1)) {
                let index = message.indexOf(arg1);
                let substring = message.substring(index, index + arg1.length);
                let reversedSubstring = substring.split('').reverse().join('');
                message = message.replace(substring, '');
                message += reversedSubstring;
                console.log(message);
            } else {
                console.log('error');
            }
        } else if (command === 'Buy') {
            console.log(`The cryptocurrency is: ${message}`);
            break;
        }
    }
}

decodeMessage((["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
"TakeEven",
"Reverse?!nzahc",
"ChangeAll?m?g",
"Reverse?adshk",
"ChangeAll?z?i",
"Buy"])
)
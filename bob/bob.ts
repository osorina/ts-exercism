enum BobAnswers {
    sure = 'Sure.',
    chill = 'Whoa, chill out!',
    fine = 'Fine. Be that way!',
    calm = 'Calm down, I know what I\'m doing!',
    whatever = 'Whatever.'
}

class Bob {
    hey(originalPhrase: string = ''): string {
        const phrase = originalPhrase.replace(/\s/g, '');

        const hasDigits: boolean = !!phrase.match(/[0-9]/i);
        const hasLetters: boolean = !!phrase.match(/[a-z]/i);

        const isEmpty: boolean = !hasDigits && !hasLetters;
        const isUpperCase: boolean = hasLetters && phrase === phrase.toUpperCase();
        const isQuestion: boolean = phrase[phrase.length - 1] === '?';

        if (isEmpty) {
            return BobAnswers.fine;
        }

        if (isQuestion) {
            return BobAnswers[isUpperCase ? 'calm' : 'sure'];
        }

        if (isUpperCase) {
            return BobAnswers.chill;
        }

        return BobAnswers.whatever;
    }
}

export default Bob

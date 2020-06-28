class TwoFer {
    public static twoFer(name?: string): string {
        const printName = name ?? 'you';
        return `One for ${printName}, one for me.`
    }
}

export default TwoFer

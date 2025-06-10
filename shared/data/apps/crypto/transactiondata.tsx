interface Transaction {
  id: string;
  cryptoName: string;
  cryptoLogo: string;
  date: string;
  type: 'Deposit' | 'Withdrawal';
  amount: string;
  status: 'Successful' | 'Pending' | 'Failed';
  transactionHash: string;
  wallet: string;
}
export const Cryptotransactions: Transaction[] = [
  {
    id: '1',
    cryptoName: 'Ethereum (ETH)',
    cryptoLogo: '../../../assets/images/crypto-currencies/regular/Ethereum.svg',
    date: '15 Aug 2024, 14:30',
    type: 'Deposit',
    amount: '$1,200.00',
    status: 'Successful',
    transactionHash: '0xA012MNOP345QR6789STU',
    wallet: '0xDEF123ABC456GHI789JKL012MNOP345QR6789STU'
  },
  {
    id: '2',
    cryptoName: 'Litecoin (LTC)',
    cryptoLogo: '../../../assets/images/crypto-currencies/regular/litecoin.svg',
    date: '20 Aug 2024, 11:45',
    type: 'Withdrawal',
    amount: '$500.00',
    status: 'Pending',
    transactionHash: '0xB123MNOP678QR1234STU',
    wallet: '0xABC123DEF456GHI789JKL012MNOP6789QRSTU'
  },
  {
    id: '3',
    cryptoName: 'Ripple (XRP)',
    cryptoLogo: '../../../assets/images/crypto-currencies/regular/Ripple.svg',
    date: '30 Aug 2024, 15:10',
    type: 'Withdrawal',
    amount: '$300.00',
    status: 'Failed',
    transactionHash: '0xD345MNOP890QR3456STU',
    wallet: '0xGHI234JKL890MNO123PQR456STU789ABCDEF'
  },
  {
    id: '4',
    cryptoName: 'Bitcoin (BTC)',
    cryptoLogo: '../../../assets/images/crypto-currencies/regular/Bitcoin.svg',
    date: '10 Sep 2024, 09:30',
    type: 'Withdrawal',
    amount: '$420.00',
    status: 'Pending',
    transactionHash: '0xF567MNOP012QR5678STU',
    wallet: '0xLMN456OPQ789RST123UVW234XYZ56789ABCD'
  },
  {
    id: '5',
    cryptoName: 'Dash (DASH)',
    cryptoLogo: '../../../assets/images/crypto-currencies/regular/Dash.svg',
    date: '15 Sep 2024, 16:20',
    type: 'Deposit',
    amount: '$1,500.00',
    status: 'Successful',
    transactionHash: '0xG678MNOP123QR6789STU',
    wallet: '0xOPQ567RST890UVW123XYZ345ABC67890EFGH'
  },
  {
    id: '6',
    cryptoName: 'Ethereum (ETH)',
    cryptoLogo: '../../../assets/images/crypto-currencies/regular/Ethereum.svg',
    date: '20 Sep 2024, 11:15',
    type: 'Withdrawal',
    amount: '$750.00',
    status: 'Failed',
    transactionHash: '0xH789MNOP234QR7890STU',
    wallet: '0xRST890UVW123XYZ456ABC789DEFGH0123456'
  },
  {
    id: '7',
    cryptoName: 'Euro (EUR)',
    cryptoLogo: '../../../assets/images/crypto-currencies/regular/Euro.svg',
    date: '25 Sep 2024, 08:45',
    type: 'Deposit',
    amount: '$1,000.00',
    status: 'Successful',
    transactionHash: '0xI890MNOP345QR8901STU',
    wallet: '0xUVW123XYZ456ABC789DEFGH01234567890IJKL'
  },
  {
    id: '8',
    cryptoName: 'NEM (XEM)',
    cryptoLogo: '../../../assets/images/crypto-currencies/regular/NEM.svg',
    date: '05 Sep 2024, 12:45',
    type: 'Deposit',
    amount: '$950.00',
    status: 'Successful',
    transactionHash: '0xE456MNOP901QR4567STU',
    wallet: '0xJKL345MNO678PQR890STU123VWX456YZABC'
  },
  {
    id: '9',
    cryptoName: 'EOS (EOS)',
    cryptoLogo: '../../../assets/images/crypto-currencies/regular/EOS.svg',
    date: '25 Aug 2024, 09:00',
    type: 'Deposit',
    amount: '$750.00',
    status: 'Successful',
    transactionHash: '0xC234MNOP789QR2345STU',
    wallet: '0xDEF234ABC567GHI890JKL012MNOP789QRSTU'
  },

];
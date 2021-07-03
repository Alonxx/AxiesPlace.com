export const getFilterPrice = (filter, array) => {
	let test = [...array];
	switch (filter) {
		case 'Lowest':
			return test.sort((a, b) => {
				if (
					Number(a.auction.currentPriceUSD) > Number(b.auction.currentPriceUSD)
				) {
					return 1;
				} else {
					return -1;
				}
			});
		case 'Highest':
			return test.sort((a, b) => {
				if (
					Number(a.auction.currentPriceUSD) < Number(b.auction.currentPriceUSD)
				) {
					return 1;
				} else {
					return -1;
				}
			});
		case 'All':
			return test;
		default:
			return test;
	}
};

export const getFilterClass = (filter, array) => {

	return filter === 'All' ? array : array.filter((el) => el.class === filter);
};

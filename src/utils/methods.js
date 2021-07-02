export const getFilterPrice = (filter, array) => {
	switch (filter) {
		case 'Lowest':
			return array.sort((a, b) => {
				if (
					Number(a.auction.currentPriceUSD) > Number(b.auction.currentPriceUSD)
				) {
					return 1;
				} else {
					return -1;
				}
			});
		case 'Highest':
			return array.sort((a, b) => {
				if (
					Number(a.auction.currentPriceUSD) < Number(b.auction.currentPriceUSD)
				) {
					return 1;
				} else {
					return -1;
				}
			});
		case 'All':
			return array;
		default:
			return array;
	}
};

export const getFilterClass = (filter, array) => {
	console.log('filter', array);

	return filter === 'All' ? array : array.filter((el) => el.class === filter);
};

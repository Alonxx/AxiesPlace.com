export const AXIE_API = 'https://axieinfinity.com/graphql-server-v2/graphql';

export const COIN_API = 'https://api.coingecko.com/api/v3/coins';

export const QUERY_GET_ETH = `query NewEthExchangeRate {
  exchangeRate {
    eth {
      usd
      __typename
    }
    __typename
  }
}`;

export const QUERY_GET_AXIE_LATEST = `query GetAxieLatest($auctionType: AuctionType, $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {
  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {
    total
    results {
      ...AxieRowData
      __typename
    }
    __typename
  }
}

fragment AxieRowData on Axie {
  id
  image
  class
  name
  genes
  owner
  class
  stage
  title
  breedCount
  level
  parts {
    ...AxiePart
    __typename
  }
  stats {
    ...AxieStats
    __typename
  }
  auction {
    ...AxieAuction
    __typename
  }
  __typename
}

fragment AxiePart on AxiePart {
  id
  name
  class
  type
  specialGenes
  stage
  abilities {
    ...AxieCardAbility
    __typename
  }
  __typename
}

fragment AxieCardAbility on AxieCardAbility {
  id
  name
  attack
  defense
  energy
  description
  backgroundUrl
  effectIconUrl
  __typename
}

fragment AxieStats on AxieStats {
  hp
  speed
  skill
  morale
  __typename
}

fragment AxieAuction on Auction {
  startingPrice
  endingPrice
  startingTimestamp
  endingTimestamp
  duration
  timeLeft
  currentPrice
  currentPriceUSD
  suggestedPrice
  seller
  listingIndex
  state
  __typename
}`;

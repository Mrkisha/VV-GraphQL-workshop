export default {
  Query: {
    allHeroes: () => [
      {
        id: '-pBE1JAyz',
        name: 'Evan You',
        image:
          'https://pbs.twimg.com/profile_images/888432310504370176/mhoGA4uj_400x400.jpg',
        twitter: 'youyuxi',
        github: 'yyx990803',
      },
    ],
  },
  Mutation: {
    addHero: (_, { hero }) => ({
      id: 1,
      name: hero.name,
      image: hero.image || '',
      twitter: hero.twitter || '',
      github: hero.github || '',
    }),
  },
};

module.exports = {
  getQuote: (req, res) => {
    const quotes = [
      {
        content: `Don't only practice your art, but force your way into its secrets; art deserves that, for it and knowledge can raise man to the Divine.`,
        source: `Ludwig van Beethoven`,
      },
      {
        content: `If I don't practice one day, I know it; two days, the critics know it; three days, the public knows it.`,
        source: `Jascha Heifetz`
      },
      {
        content: `It takes a long time to sound like yourself.`,
        source: `Miles Davis`
      },
      {
        content: `You have to, take a deep breath. and allow the music to flow through you. Revel in it, allow yourself to awe. When you play allow the music to break your heart with its beauty.`,
        source: `Kelly White`
      },
      {
        content: `Music is a great natural high and a great natural escape.`,
        source: `Shania Twain`
      },
      {
        content: `The easiest way to avoid wrong notes is to never open your mouth and sing. What a mistake that would be.`,
        source: `Pete Seeger`
      },
      {
        content: `Some days there won't be a song in your heart. Sing anyway.`,
        source: `Emory Austin`
      },
      {
        content: `One good thing about music, when it hits you, you feel no pain.`,
        source: `Bob Marley`
      },
      {
        content: `When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.`,
        source: `Confucius`
      },
      {
        content: `You play like you practice and practice how you play.`,
        source: `Marcus Luttrel`
      },
      {
        content: `Practice is the best of all instructors.`,
        source: `Publilius Syrus`
      },
      {
        content: `It's easy to play any musical instrument: all you have to do is touch the right key at the right time and the instrument will play itself.`,
        source: `J.S. Bach`
      },
      {
        content: `Music is a higher revelation than all wisdom and philosophy. Music is the electrical soil in which the spirit lives, thinks and invents.`,
        source: `Ludwig van Beethoven`
      },
    ];

    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];

    res.status(200).send(randomQuote);
  },
};

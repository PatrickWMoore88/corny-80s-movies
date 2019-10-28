'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('movies',
        [
          {title: 'The Shining', year: '1980', social_rating: '8.4', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'A Nightmare on Elm Street', year: '1984', social_rating: '7.5', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Friday the 13th', year: '1980', social_rating: '6.5', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'The Evil Dead', year: '1981', social_rating: '7.5', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'The Thing', year: '1982', social_rating: '8.1', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Children of the Corn', year: '1984', social_rating: '5.7', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'The Lost Boys', year: '1987', social_rating: '7.3', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Pet Semetary', year: '1989', social_rating: '8.4', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Christine', year: '1983', social_rating: '6.7', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Childs Play', year: '1988', social_rating: '6.6', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Gremlins', year: '1984', social_rating: '7.3', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'The Monster Squad', year: '1987', social_rating: '7.1', movie_rating: 'PG-13', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Cutting Class', year: '1989', social_rating: '4.4', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Poltergeist', year: '1982', social_rating: '7.3', movie_rating: 'PG', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Evil Dead 2', year: '1987', social_rating: '7.8', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'An American Werewolf in London', year: '1981', social_rating: '8.4', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Creepshow', year: '1982', social_rating: '6.9', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Cujo', year: '1983', social_rating: '6.1', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Angel Heart', year: '1987', social_rating: '7.3', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Killer Klowns from Outer Space', year: '1988', social_rating: '6.2', movie_rating: 'PG-13', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Fright Night', year: '1985', social_rating: '7.1', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'They Live', year: '1988', social_rating: '7.3', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Halloween II', year: '1981', social_rating: '6.5', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Maniac Cop', year: '1988', social_rating: '6.0', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Little Shop of Horrors', year: '1986', social_rating: '5.6', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'The Texas Chainsaw Massace 2', year: '1986', social_rating: '5.6', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'The Return of the Living Dead', year: '1985', social_rating: '7.3', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'The Fly', year: '1986', social_rating: '7.5', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Elvira: Mistress of the Dark', year: '1988', social_rating: '6.5' , movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Pumpkinhead', year: '1988', social_rating: '6.2', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Sleepaway Camp', year: '1983', social_rating: '6.3', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Halloween III: Season of the Witch', year: '1982', social_rating: '4.9', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Friday the 13th: The Final Chapter', year: '1984', social_rating: '6.0', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Creepshow 2', year: '1987', social_rating: '6.1', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Silver Bullet', year: '1985', social_rating: '6.4', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'House', year: '1985', social_rating: '6.2', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'The Blob', year: '1988', social_rating: '6.5', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Manhunter', year: '1986', social_rating: '7.2', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'A Nightmare on Elm Street 3: Dream Warriors', year: '1987', social_rating: '6.6', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Friday the 13th: Part III', year: '1982', social_rating: '5.7', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'A Nightmare on Elm Street 2: Freddys Revenge', year: '1985', social_rating: '5.5', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Troll', year: '1986', social_rating: '4.5', movie_rating: 'PG-13', createdAt: new Date(), updatedAt: new Date() },
          {title: 'The Slumber Party Massacre', year: '1982', social_rating: '5.7', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Re-Animator', year: '1985', social_rating: '7.2', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'The Howling', year: '1981', social_rating: '6.6', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Swamp Thing', year: '1982', social_rating: '5.4', movie_rating: 'PG', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Halloween: The Return of Michael Meyers', year: '1988', social_rating: '5.9', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Critters', year: '1986', social_rating: '6.1', movie_rating: 'PG-13', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Twilight Zone: The Movie', year: '1983', social_rating: '6.5', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'From Beyond', year: '1986', social_rating: '6.7', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() },
          {title: 'Day of the Dead', year: '1985', social_rating: '7.2', movie_rating: 'R', createdAt: new Date(), updatedAt: new Date() } 
        ], 
        {}
        );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('movies', null, {});
  }
};
